import React, { useState } from 'react';
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
        document.body.style = 'overflow: hidden;';
        document.getElementById('drawerContent').classList.toggle('drawerOpen');
        document.getElementById('drawerNavigationWrapper').classList.toggle('drawerOpenNavi');
      }, 200)
    } else {
      setTimeout(() => {
        document.body.style = '';
        document.getElementById('drawerContent').classList.toggle('drawerOpen');
        document.getElementById('drawerNavigationWrapper').classList.toggle('drawerOpenNavi');
        setTimeout(() => setMenuOpen(false), 200);
      }, 200)
    }

    
    console.log(menuOpen)
  }
  return (
    <>
      <div className="menuIcon" onClick={openMenu}>
        <div className={`menuIconMiddle ${menuOpen ? 'open' : ''}`} />
      </div>
      {
        menuOpen &&
        <>
          <div className="drawer">
            <div id="drawerContent" className="drawerContent">
            </div>
          </div>
          <div id="drawerNavigationWrapper">
            <div className="drawerNavigationWrapper">
              <NavigationContent activeRoute={activeRoute} />
            </div>
          </div>
        </>
      }
      <div className="naviWrapper">
        <NavigationContent activeRoute={activeRoute} />
      </div>
    </>
  )
};

export default Navigation;