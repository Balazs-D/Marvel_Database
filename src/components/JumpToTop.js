import React from 'react'

const JumpToTop =()=> {

    const jump = () => {
        window.scrollTo(0, 0)
    };

    return (
      <div style={actionBar}>
        <button style={buttonStyle} className='main-font' onClick={jump}>UP!</button>
      </div>
    );
};

const actionBar = {
  position: 'fixed',
  bottom: '5%',
  left: '18%',
  transform: 'translateX(-50%)',
  zIndex: '100',
  borderRadius: '50%',
  padding: '0.3%',
  backgroundImage:
    'linear-gradient(to right, #bf953f, #fcf6ba, #b38728, #fbf5b7, #aa771c)',
  boxShadow: '0vw 0.5vw 0.5vw black'
};

const buttonStyle = {
  padding: '1vw',
  borderRadius: '50%',
  outline: 'none',
  border: '1px solid black',
  backgroundImage: 'linear-gradient(147deg, #000000 0%, #130F40 74%)',
  color: '#fcf6ba',
  textShadow: '0vw 0.2vw 0.3vw black'
};



export default JumpToTop;
