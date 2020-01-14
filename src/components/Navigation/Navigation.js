import React, { useState } from 'react';
import { NavHashLink as HashLink } from 'react-router-hash-link';
import history from '../../createHistory';

import NavigationContent from './NavigationContent';

import './Navigation.css';

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeRoute, setActiveRoute] = useState('#first');
  history.listen( location =>  {
    if (location.hash !== "") {
      setActiveRoute(location.hash);
    } else {
      setActiveRoute(location.pathname)
    }
  });

  const openMenu = () => {
    if (!menuOpen) {
      setMenuOpen(true);
      setTimeout(() => {
        document.getElementById('drawerContent').classList.toggle('drawerOpen');
      }, 500)
    } else {
      setTimeout(() => {
        document.getElementById('drawerContent').classList.toggle('drawerOpen');
        setTimeout(() => setMenuOpen(false), 500);
      }, 500)
    }

    
    console.log(menuOpen)
  }
  return (
    <>
      <div className="menuIcon" onClick={openMenu}>
        <div className={`menuIconMiddle ${menuOpen ? 'open' : ''}`}></div>
      </div>
      {
        menuOpen &&
        <div className="drawer">
          <div id="drawerContent" className="drawerContent">
            <div class="drawerNavigationWrapper">
              <NavigationContent activeRoute={activeRoute} />
            </div>
          </div>
        </div>
      }
      <div className="naviWrapper">
        <NavigationContent activeRoute={activeRoute} />
      </div>
    </>
  )
};

export default Navigation;