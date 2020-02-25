import React from 'react';
import cx from 'classnames';
import { NavHashLink as HashLink } from 'react-router-hash-link';
import Icon, { icons, sizes } from '../Icon/Icon';

import styles from './Navigation.scss';

const NavigationContent = ({ active }) => {
  return (
    <div className={styles.innerWrapper}>
      <HashLink
        className={styles.naviItem}
        smooth
        to="#first"
        id={active === 1 ? 'active' : undefined}
      >
        <Icon className={cx(styles.icon, {[styles.active]: active === 1})} icon={icons.calendar} size={sizes.lg} />
      </HashLink>

      <HashLink
        className={styles.naviItem}
        smooth
        to="#second"
        id={active === 2 ? 'active' : undefined}
      >
        <Icon className={cx(styles.icon, {[styles.active]: active === 2})} icon={icons.shoppingCart} size={sizes.lg} />
      </HashLink>

      <HashLink
        className={styles.naviItem}
        smooth
        to="#third"
        id={active === 3 ? 'active' : undefined}
      >
        <Icon className={cx(styles.icon, {[styles.active]: active === 3})} icon={icons.grill} size={sizes.lg} />
      </HashLink>

      <HashLink
        className={styles.naviItem}
        smooth
        to="#fourth"
        id={active === 4 ? 'active' : undefined}
      >
        <Icon className={cx(styles.icon, {[styles.active]: active === 4})} icon={icons.check} size={sizes.lg} />
      </HashLink>
    </div>
  );
}

export default NavigationContent;