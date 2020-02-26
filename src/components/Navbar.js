import React, {useState} from 'react';
import Home from './Home';
import Characters from './Characters';
import Events from './Events';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Navbar = () => {

const [per, setPer] = useState(0);

const mouseMove = e => {
  setPer(Math.round((e.screenX / window.innerWidth) * 100));
  console.log(per);
};

const goldBg = {
  background: `linear-gradient(to right, #bf953f ${per -
    15}%, #fcf6ba ${per}%, #bf953f ${per + 15}%, #bf953f,
    #aa771c 100%)`,
  fontSize: '4vw'
};


  return (
    <Router>
      <div>
        <nav className='nav-cont'>
          <ul className='nav-ul' style={goldBg} onMouseMove={mouseMove}>
            <li className='nav-li'>
              <Link className='nav-a' to='/home'>
                Home
              </Link>
            </li>
            <li className='nav-li'>
              <Link className='nav-a' to='/characters'>
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
          {/* <Route path='/home'>
            <Home />
          </Route>

          <Route path='/characters'>
            <Characters />
          </Route>

          <Route path='events'>
            <Events />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
};

export default Navbar;
