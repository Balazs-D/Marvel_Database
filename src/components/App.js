import React from 'react';
import '../assets/css/style.css';
import Characters from './Characters';
import Navbar from './Navbar';
import MarvelState from '../context/MarvelState';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <MarvelState>
      <div style={{ overflow: 'hidden' }}>
        <Navbar />
        <Characters />
      </div>
    </MarvelState>
  );
}
