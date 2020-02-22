import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Main = () => {

    const doFetchAll=()=>{
        let res = axios.get(
          'http://gateway.marvel.com/comics?apikey=80429f9cc6b04d6f8eb26487a685500180429f9cc6b04d6f8eb26487a6855001'
        );

        let fetchedData = res.data;
        console.log(res.data)
    }


    return (
        <div>
<button onClick={doFetchAll}>CLICK</button>
        </div>
    )

};


export default Main
