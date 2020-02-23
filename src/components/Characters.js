import React, { useContext, useState, useEffect } from 'react';
import MarvelContext from '../context/marvelContext';
import Loading from './Loading';
import CharCard from './CharCard';
import axios from 'axios';

const Characters = () => {
  const marvelCont = useContext(MarvelContext);

  useEffect(() => {
    marvelCont.fetchCharacterList();
  }, []);

  // fetchWithOffset 
  // didFetch = 0
  // if 


  if(marvelCont.loading === true){
    return (<Loading />)
  }else {

  return (
    <div>

      <div style={charListStyle} className='center-row escape-nav'>
        {marvelCont.characters.map((char, i) => {
          return (
            <div className='card-border-wrapper'>
              <div style={centerItem} key={i} className='main-font'>
                <img
                  src={`${char.thumbnail.path}/standard_large.${char.thumbnail.extension}`}
                  alt=''
                  style={{ marginTop: '2vw' }}
                ></img>
                <h4 style={name}>{char.name.toUpperCase()}</h4>
              </div>
            </div>
          );
        })}
      </div>

      
    </div>
  ) };
};

// Cards layout
const charListStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(6, 1fr)',
  gridGap: '1rem',
  padding: '2vw',
  backgroundImage: 'linear-gradient(147deg, #000000 0%, #130F40 74%)'
};

// Card layout
const centerItem = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  hyphens: 'auto',
  width: '100%',
  height: '100%',
  backgroundImage: 'linear-gradient(175deg, #12100E 70%, #2c3e50 90%)'
  //   borderRadius: '4%',
  //   border: '0.1vw solid lightgrey',
  //   padding: '2vw'
};

// Character name style
const name = {
  textAlign: 'center',
  fontSize: '.7vw',
  marginTop: '3vh',
  backgroundImage:
    'linear-gradient(to right, #bf953f, #fcf6ba, #b38728, #fbf5b7, #aa771c)',
  padding: '3vh 0.3vw',
  width: '75%'
  // borderRadius: '4%',
};

export default Characters;
