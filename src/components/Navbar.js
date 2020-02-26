import React, {useState, useContext} from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import MarvelCont from '../context/marvelContext';

const Navbar = () => {

  const [per, setPer] = useState(0);
  const marvelCont = useContext(MarvelCont);

 



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
      <div>
        <nav className='nav-cont'>
          <ul className='nav-ul menu-font' style={goldBg} onMouseMove={mouseMove}>
            <li className='nav-li'>
              <Link className='nav-a' to='/home'>
                HOME
              </Link>
            </li>
            <li className='nav-li'>
              <Link className='nav-a' to='/characters' onClick={marvelCont.fetchCharacterList}>
                CHARACTERS
              </Link>
            </li>
            <li className='nav-li'>
              <Link className='nav-a' to='/events'>
                EVENTS
              </Link>
            </li>
          </ul>
        </nav>

       
      </div>
  );
};

export default Navbar;
