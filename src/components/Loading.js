import React from 'react';
import src from '../assets/loader.gif';

const Loading = () => {
  return (
    <div style={layout}>
      <img src={src} alt='' />
    </div>
  );
};

const layout = {
  display: 'flex',
  justifyContent: 'center',
  height: '100vh',
  width: '100vw',
  alignItems: 'center',
  background: 'black',
  
};
export default Loading;
