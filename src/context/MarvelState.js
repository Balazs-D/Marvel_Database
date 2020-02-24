import React, { useReducer, useState } from 'react';
import axios from 'axios';
import MarvelContext from './marvelContext';
import MarvelReducer from './marvelReducer';
import {
  FETCH_CHAR_LIST,
  SET_LOADING,
  FETCH_WITH_OFFSET,
  COUNT_FETCH,
  FETCH_SEARCH,
  SET_SEARCH
} from './types';
import marvelCont from './marvelContext';

const MarvelState = props => {
  const initialState = {
    characters: [],
    offsetList: [],
    character: {},
    fetchCounter: 1,
    loading: false,
    search: false
  };

  const [state, dispatch] = useReducer(MarvelReducer, initialState);

  // fetch characters

  const fetchCharacterList = async () => {
    setLoading();

    let res = await axios.get(
      'https://gateway.marvel.com:443/v1/public/characters?apikey=80429f9cc6b04d6f8eb26487a6855001'
    );

    let characterList = res.data.data.results;
    console.log(characterList);

    dispatch({
      type: FETCH_CHAR_LIST,
      payload: characterList
    });
  };

  // fetchOffset

  const fetchWithOffset = async (text) => {
    const offsetVal = state.fetchCounter * 20;
   

       let res = await axios.get(
         `https://gateway.marvel.com:443/v1/public/characters?offset=${offsetVal}&apikey=80429f9cc6b04d6f8eb26487a6855001`
       );

       let nextCharList = res.data.data.results;
       console.log(nextCharList);

       let currCharList = state.characters;
       nextCharList.map((item, i) => {
         currCharList.push(item);
       });

       await dispatch({
         type: FETCH_WITH_OFFSET,
         payload: currCharList
       });

       countFetch();

    
   
  };

  // Fetch search

  const fetchSearch = async text => {
    setLoading();

    let res = await axios.get(
      `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${text}&apikey=80429f9cc6b04d6f8eb26487a6855001`
    );

    let searchList = res.data.data.results;

    dispatch({
      type: FETCH_SEARCH,
      payload: searchList,
    })
  };

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  // Fetch counter

  const countFetch = () => dispatch({ type: COUNT_FETCH });

  // Set search 

  const setSearch =()=>dispatch({type: SET_SEARCH});

  return (
    <MarvelContext.Provider
      value={{
        characters: state.characters,
        character: state.character,
        loading: state.loading,
        fetchCharacterList,
        fetchWithOffset,
        setLoading,
        countFetch,
        fetchSearch,
        setSearch
      }}
    >
      {props.children}
    </MarvelContext.Provider>
  );
};

export default MarvelState;
