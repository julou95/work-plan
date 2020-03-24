import React, { useState, useEffect } from 'react';
import history from '../../createHistory';
import NavKnob from '../NavKnob/NavKnob';

import NavigationContent from './NavigationContent';

import styles from './Navigation.scss';

const backgroundColors = [
  '#3c40c6',
  '#4bcffa',
  '#ffc048',
  '#ff5e57',
];

const Navigation = () => {
  useEffect(() => {
    styling();
  });

  const styling = () => {
    const navWrapper = document.getElementById('navWrapper');
    navWrapper.style.backgroundColor = backgroundColors[active-1];

    const activeElement = document.getElementById('active');
    const activeOffset = activeElement.getBoundingClientRect().x;

    const knob = document.getElementById('knob');
    knob.style.left = `${activeOffset - 15}px`;
  };

  const [activeRoute, setActiveRoute] = useState(window.location.hash);

  history.listen(location =>  {
    if (location.hash !== "") {
      setActiveRoute(location.hash);
    } else {
      setActiveRoute(location.pathname)
    }
  });

  let active = 1;

  console.log('activeRoute', activeRoute);

  switch (activeRoute) {
    case '#/#second':
      active = 2;
      break;
    case '#/#third':
      active = 3;
      break;
    case '#/#fourth':
      active = 4;
      break;
    default:
      active = 1;
  }
  return (
    <div id="navWrapper" className={styles.naviWrapper}>
      <NavKnob color={backgroundColors[active-1]} />
      <NavigationContent active={active} />
    </div>
  )
};

export default Navigation;