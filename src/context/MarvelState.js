import React, {useReducer} from 'react';
import axios from 'axios';
import MarvelContext from './marvelContext';
import MarvelReducer from './marvelReducer';
import {
    FETCH_CHAR_LIST
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


    
return (

<MarvelContext.Provider value={{
    characters: state.characters,
    character: state.character,
    loading: state.loading,
    fetchCharacterList,



}}>


{props.children}
</MarvelContext.Provider>)
};

export default MarvelState;