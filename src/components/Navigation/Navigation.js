import React from 'react';
import { NavHashLink as HashLink } from 'react-router-hash-link';

import './Navigation.css';

const Navigation = () => {
  return (
    <div className="naviWrapper">
      <HashLink className="naviItem first" smooth to="/#first" activeClassName="active">
        FIRST
      </HashLink>

      <HashLink className="naviItem second" smooth to="/#second" activeClassName="active">
        SECOND
      </HashLink>

      <HashLink className="naviItem third" smooth to="/#third" activeClassName="active">
        THIRD
      </HashLink>

      <HashLink className="naviItem fourth" smooth to="/#fourth" activeClassName="active">
        FOURTH
      </HashLink>
    </div>
  )
}

export default Navigation;