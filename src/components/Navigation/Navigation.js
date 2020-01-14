import React from 'react';
import { NavHashLink as HashLink } from 'react-router-hash-link';

import './Navigation.css';

const Navigation = () => {
  console.log('LJ - pathname: document.location.pathname + document.location.hash:', {pathname: document.location.pathname + document.location.hash});
  return (
    <div className="naviWrapper">
      <HashLink
        className="naviItem first"
        smooth
        to="/#first"
        activeClassName="active"
        location={{pathname: document.location.pathname + document.location.hash}}
      >
        FIRST
      </HashLink>

      <HashLink
        className="naviItem second"
        smooth to="/#second"
        activeClassName="active"
        location={{pathname: document.location.pathname + document.location.hash}}
      >
        SECOND
      </HashLink>

      <HashLink
        className="naviItem third"
        smooth
        to="/#third"
        activeClassName="active"
        location={{pathname: document.location.pathname + document.location.hash}}
      >
        THIRD
      </HashLink>

      <HashLink
        className="naviItem fourth"
        smooth
        to="/#fourth"
        activeClassName="active"
        location={{pathname: document.location.pathname + document.location.hash}}
      >
        FOURTH
      </HashLink>
    </div>
  )
};

export default Navigation;