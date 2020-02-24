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
    e.preventDefault();
    console.log(e.target.value, text);

    marvelCont.fetchSearch(text);
    marvelCont.setSearch();
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
        <button type='submit' style={searchStyle} className='button-search main-font' value='Search' >GO!</button>
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
  alignItems: 'flex-start',

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
  
};

export default Sidebar;
