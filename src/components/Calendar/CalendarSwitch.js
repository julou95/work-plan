import React from 'react';

import Icon, { icons, sizes } from '../Icon/Icon';
import styles from './CalendarList.scss';

const months = ['Januar',
 'Februar',
 'März',
 'April',
 'Mai',
 'Juni',
 'Juli',
 'August',
 'September',
 'Oktober',
 'November',
 'Dezember',
];

const CalendarSwitch = ({ actualMonth, setMonth }) => {

  const month = new Date().getUTCMonth() + 1;

  return (
    <div className={styles.monthSwitch}>
      <button className={styles.switchButton} onClick={() => setMonth(actualMonth - 1)}>
        <Icon icon={icons.arrowLeft} size={sizes.md} />
      </button>
      <div onClick={() => setMonth(month)} className={styles.monthLabel}>{months[actualMonth-1]}</div>
      <button className={styles.switchButton} onClick={() => setMonth(actualMonth + 1)}>
        <Icon icon={icons.arrowRight} size={sizes.md} />
      </button>
    </div>
  )
}

export default CalendarSwitch;