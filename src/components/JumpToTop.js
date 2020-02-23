import React from 'react'

const JumpToTop =()=> {

    const jump = () => {
        window.scrollTo(0, 0)
    };

    return (
      <div style={actionBar}>
        <button onClick={jump}>Jump to top!</button>
      </div>
    );
};

const actionBar = {
  position: 'fixed',
  bottom: '0%',
  left: '50%',
  transform: 'translateX(-50%)',
  zIndex: '100',
  background: 'black'
  
};



export default JumpToTop;
