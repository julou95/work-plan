import React from 'react';
import { NavHashLink as HashLink } from 'react-router-hash-link';

import './Navigation.css';

const NavigationContent = ({ activeRoute }) => {
  return (
    <>
      <HashLink
        className="naviItem"
        smooth
        to="#first"
        activeClassName={activeRoute === '#first' ? 'active' : ''}
      >
        <div className="navItemInner">
          FIRST
        </div>
      </HashLink>

      <HashLink
        className="naviItem"
        smooth
        to="#second"
        activeClassName={activeRoute === '#second' ? 'active' : ''}
      >
        <div className="navItemInner">
          SECOND
        </div>
      </HashLink>

      <HashLink
        className="naviItem"
        smooth
        to="#third"
        activeClassName={activeRoute === '#third' ? 'active' : ''}
      >
        <div className="navItemInner">
          THIRD
        </div>
      </HashLink>

      <HashLink
        className="naviItem"
        smooth
        to="#fourth"
        activeClassName={activeRoute === '#fourth' ? 'active' : ''}
      >
        <div className="navItemInner">
          FOURTH
        </div>
      </HashLink>
    </>
  )
}

export default NavigationContent;