import React, { Fragment, useState, useContext } from 'react';
import MarvelContext from '../context/marvelContext';

const Sidebar = () => {
  const marvelCont = useContext(MarvelContext);
  const [text, setText] = useState('');

  const onChange = e => {
    setText(e.target.value);
    console.log(e.target.value);
  };

  const onSubmit = e => {
    marvelCont.setSearch();
    e.preventDefault();
    console.log(e.target.value, text);

    marvelCont.fetchSearch(text);
    // marvelCont.setSearch();
    setText('');
  };

  return (
    <div style={sidebarStyle}>
      <form onSubmit={onSubmit} style={centerItem}>
        <input
          type='text'
          name={text}
          placeholder='Search...'
          onChange={onChange}
        />
        <div style={buttonLay}>
        
        <button
        type='submit'
        style={searchStyle}
        className='main-font'
        value='Search'
        >
        GO!
        </button>
        <button style={searchStyle} onClick={marvelCont.fetchCharacterList} className='main-font'>RESET</button></div>
      </form>
    </div>
  );
};

const sidebarStyle = {
  height: '100vh',
  gridGap: '2rem',
  padding: '14vw 4vw',
  top: '0vw',
  left: '-1vh',
  position: 'fixed'
};

const centerItem = {
  display: 'flex',
  // alignItems: 'flex-start',

  flexDirection: 'column',
  justifyContent: 'flex-start',
  padding: '1vw',

  width: '100%',
  height: '100%'
};

const searchStyle = {
  backgroundImage: 'linear-gradient(147deg, #000000 0%, #130F40 74%)',
  border: '1px solid #bf953f',
  color: '#bf953f',
  padding: '0.5vw',
  boxShadow: '0.2vw 0.3vw 0.4vw black',

};

const buttonLay = {
 display: 'flex',
 flexDirection: 'row',
 justifyContent: 'space-between',

};




export default Sidebar;
