import React from 'react';

import styles from './Knob.scss';

const NavKnob = ({ color }) => {
  const left = { width: '5px', height: '5px', backgroundImage: `radial-gradient(circle at 0 0, rgba(0,0,255,0) 5px, ${color} 5px)`};
  const right = { width: '5px', height: '5px', backgroundImage: `radial-gradient(circle at 100% 0, rgba(0,0,255,0) 5px, ${color} 5px)`};

  
  return (
  <div className={styles.knob} id="knob">
    <div className={styles.left} style={left}>
      &nbsp;
    </div>
    <div className={styles.center} style={{ backgroundColor: color}}>
    </div>
    <div className={styles.right} style={right}>
      &nbsp;
    </div>
  </div>
  )
}

export default NavKnob; 