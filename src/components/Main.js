import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Main = () => {

    const fetchCharacterList= async ()=>{
        let res = await axios.get(
          'https://gateway.marvel.com:443/v1/public/characters?apikey=80429f9cc6b04d6f8eb26487a6855001'
        );

        let characterList = res.data.data.results;
        console.log(characterList)
    }


    return (
        <div>
<button onClick={fetchCharacterList}>CLICK</button>
        </div>
    )

};


export default Main
