import React, {Fragment} from 'react';

const Sidebar = () => {
  return (
    <div style={sidebarStyle}>
      <form style={centerItem}>
        <input type='text' value='search' placeholder='search...'></input>
        <span className='d-row'>
          <input
            type='radio'
            id='avengers'
            name='quicksearch'
            value='avengers'
          ></input>
          <label for='avengers'>Avengers</label>
        </span>
        <span className='d-row'>
          <input
            type='radio'
            id='celestials'
            name='quicksearch'
            value='celestials'
          ></input>
          <label for='celestials'>Celestials</label>
        </span>
        <span className='d-row'>
          <input
            type='radio'
            id='xmen'
            name='quicksearch'
            value='xmen'
          ></input>
          <label for='xmen'>X-Men</label>
        </span>
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

export default Sidebar;
