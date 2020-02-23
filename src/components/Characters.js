import React, { useContext, useState, useEffect } from 'react';
import MarvelContext from '../context/marvelContext';
import CharCard from './CharCard';
import axios from 'axios';

const Characters = () => {
  const marvelCont = useContext(MarvelContext);

  useEffect(()=>{
    marvelCont.fetchCharacterList()
  })

  return (
    <div>
      <div style={charListStyle} className='center-row'>
        {marvelCont.characters.map((char, i) => {
          return (
            <div style={centerItem} className='main-font'>
              <img
                src={`${char.thumbnail.path}/portrait_xlarge.${char.thumbnail.extension}`}
                alt=''
              ></img>
              <h4 style={name}>{char.name.toUpperCase()}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const charListStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(6, 1fr)',
  gridGap: '1rem',
 
};

const centerItem = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'end',
  hyphens: 'auto',
  width: '100%'
  
};

const name = {
    textAlign: 'center',
    fontSize: '1vw',
    marginTop: '1vh'
}

export default Characters;
