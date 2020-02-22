import React from 'react';
import Home from './Home';
import Characters from './Characters';
import Events from './Events';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/home'>Home</Link>
            </li>
            <li>
              <Link to='/characters'>Characters</Link>
            </li>
            <li>
              <Link to='/events'>Events</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/home">
            <Home />
          </Route>

          <Route path='/characters'>
            <Characters />
          </Route>

          <Route path='events'>
            <Events />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Navbar;
