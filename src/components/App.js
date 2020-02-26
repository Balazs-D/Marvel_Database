import React from 'react';
import '../assets/css/style.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import Characters from './Characters';
import Char from './Char';
import Events from './Events';

import MarvelState from '../context/MarvelState';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <MarvelState>
      <Router>
        <div style={{ overflow: 'hidden' }}>
          <Navbar />
          <Switch>
            <Route path='/home'>
              <Home />
            </Route>

            <Route path='/characters'>
              <Characters />
            </Route>

            <Route path='/characters/:id'>
              <Char />
            </Route>

            <Route path='events'>
              <Events />
            </Route>
          </Switch>
          
        </div>
      </Router>
    </MarvelState>
  );
}
