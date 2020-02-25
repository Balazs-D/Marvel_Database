import React, {useContext} from 'react';
import Home from './Home';
import Characters from './Characters';
import Events from './Events';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import MarvelCont from '../context/marvelContext';

const Navbar = () => {

  const marvelCont = useContext(MarvelCont);
  return (
    <Router>
      <div>
        <nav className='nav-cont'>
          <ul className='nav-ul'>
            <li className='nav-li'>
              <Link className='nav-a' to='/home'>
                Home
              </Link>
            </li>
            <li className='nav-li'>
              <Link
                className='nav-a'
                onClick={marvelCont.fetchCharacterList}
                to='/characters'
              >
                Characters
              </Link>
            </li>
            <li className='nav-li'>
              <Link className='nav-a' to='/events'>
                Events
              </Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path='/home'>
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
