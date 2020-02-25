import React from 'react';
import cx from 'classnames';

import styles from './CalendarList.scss';

const shifts = [
  '1A',
  '1H',
  '2A',
  '5A',
  'P1',
  'P2'
];

const AddEvent = ({ addEvent, date, shift = '', closeModal, setSelectedShift }) => {
  return (
    <>
      <div className={styles.overlay} onClick={closeModal}></div>
      <div className={styles.addEventModal}>
        <h2>{date}</h2>
        <hr />
        <div className={styles.shiftContainer}>
          {
            shifts.map(shiftEntry => (
              <div className={cx(styles.shift, {[styles.selected]: shift === shiftEntry})} onClick={() => setSelectedShift(shiftEntry)}>{shiftEntry}</div>
            ))
          }
        </div>
        <div className={styles.buttonContainer}>
          <button
            disabled={shift === ''}
            className={cx(styles.switchButton, styles.save)}
            onClick={() => addEvent(date, shift)}
          >
            Speichern
          </button>
        </div>
      </div>
    </>
  )
}

export default AddEvent;