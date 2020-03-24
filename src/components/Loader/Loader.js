import React from 'react';
import cx from 'classnames';

import styles from './Loader.scss';

const Loader = ({ site = 'first' }) => {
  return (
    <div className={cx(styles.wrapper, styles[site])}>
      <div className={cx(styles.ball, styles.one)} />
      <div className={cx(styles.ball, styles.two)} />
      <div className={cx(styles.ball, styles.three)} />
      <div className={styles.horizontal} />
      <div className={cx(styles.vertical, styles.left)} />
      <div className={cx(styles.vertical, styles.center)} />
      <div className={cx(styles.vertical, styles.right)} />
    </div>
  )
}

export default Loader;