import React, { useContext, useEffect } from 'react';
import MarvelContext from '../context/marvelContext';
import Loading from './Loading';
import InfiniteScroll from 'react-infinite-scroll-component';
import JumpToTop from './JumpToTop';
import { Link } from 'react-router-dom';
import { src } from '/home/dci/DCI/lord-of-the-script/react/marvel-database/src/assets/loader.gif';

import Sidebar from './Sidebar';


const Characters = () => {
  const marvelCont = useContext(MarvelContext);

  useEffect(() => {
    marvelCont.fetchCharacterList();
  }, []);

  if (marvelCont.loading === true) {
    return <Loading />;
  } else {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          backgroundImage: 'linear-gradient(147deg, #000000 0%, #130F40 74%)',
          padding: '2%'
        }}
      >
        <Sidebar />

        <InfiniteScroll
          className='escape-nav'
          style={charListStyle}
          dataLength={marvelCont.characters.length} //This is important field to render the next data
          next={marvelCont.fetchWithOffset}
          hasMore={true}
          loader={
            <img
              src={src}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              alt=''
            ></img>
          }
          endMessage={
            <p style={{ textAlign: 'center' }}>Yay! You have seen it all</p>
          }
        >
          {window.pageYOffset > 10 ? <JumpToTop /> : null}
            {marvelCont.characters.map((char, i) => {
              return (
                <div key={i} className='card-border-wrapper'>
                  <div style={centerItem} className='main-font'>
                    <img
                      src={`${char.thumbnail.path}/standard_large.${char.thumbnail.extension}`}
                      alt=''
                      style={{ marginTop: '2vw' }}
                    ></img>
                    <Link to={`/characters/${char.id}`} style={name}>{char.name.toUpperCase()}</Link>
                  </div>
                </div>
              );
            })}
          
        </InfiniteScroll>
      </div>
    );
  }
};

// Cards layout
const charListStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 15vw)',
  width: '100%',
  height: '100',
  gridGap: '2rem',
  padding: '4vw',
  marginLeft: '35vh'
};

// Card layout
const centerItem = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  padding: '0',

  width: '100%',
  height: '100%',

  backgroundImage: 'linear-gradient(175deg, #12100E 70%, #2c3e50 90%)'
  //   borderRadius: '4%',
  //   border: '0.1vw solid lightgrey',
  //   padding: '2vw'
};

const name = {
  textAlign: 'center',
  fontSize: '.7vw',
  marginTop: '3vh',
  marginBottom: '3vh',
  backgroundImage:
    'linear-gradient(to right, #bf953f, #fcf6ba, #b38728, #fbf5b7, #aa771c)',
  padding: '0.3vw',
  width: '75%'
  // borderRadius: '4%',
};

export default Characters;
