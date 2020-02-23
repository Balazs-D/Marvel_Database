import React, {useReducer, useState} from 'react';
import axios from 'axios';
import MarvelContext from './marvelContext';
import MarvelReducer from './marvelReducer';
import {
    FETCH_CHAR_LIST,
    SET_LOADING
} from './types';


const MarvelState = props => {

    const initialState = {

        characters: [],
        character: {},
        loading: false,
        
    };

        const [state, dispatch] = useReducer(MarvelReducer, initialState);

    // fetch characters

     const fetchCharacterList = async ()=>{

        setLoading();

        let res = await axios.get(
          'https://gateway.marvel.com:443/v1/public/characters?apikey=80429f9cc6b04d6f8eb26487a6855001'
        );

        let characterList = res.data.data.results;
        console.log(characterList);

        dispatch({
            type: FETCH_CHAR_LIST,
            payload: characterList,
        })
    }

    // Set Loading 
    const setLoading = () => dispatch({type: SET_LOADING});


    
return (

<MarvelContext.Provider value={{
    characters: state.characters,
    character: state.character,
    loading: state.loading,
    fetchCharacterList,
    setLoading,



}}>


{props.children}
</MarvelContext.Provider>)
};

export default MarvelState;