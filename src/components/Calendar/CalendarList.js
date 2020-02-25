import React, { useState } from 'react';

import AddEvent from './AddEvent';
import styles from './CalendarList.scss';

const days = [
  'SO',
  'MO',
  'DI',
  'MI',
  'DO',
  'FR',
  'SA',
];

const CalendarList = ({ events = [], addEvent, updateEvent }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState();
  const [selectedShift, setSelectedShift] = useState();
  const [selectedEvent, setSelectedEvent] = useState('');

  if (events.length <= 0) return null;

  const getDay = (date) => {
    const newDate = new Date(date).getUTCDay();
    return days[newDate];
  };

  const getDays = (events) => {
    const firstRow = events[0];
    return <div className={styles.eventRow}>{firstRow.map(row => <div key={getDay(row.date)} className={styles.day}>{getDay(row.date)}</div>)}</div>
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedShift();
    setSelectedDate();
    setSelectedEvent('');
  };

  const selectDate = (event) => {
    setSelectedEvent(event.id);
    setSelectedDate(event.date);
    setSelectedShift(event.shift);
    setModalOpen(true);
  };

  const addEventData = (date, summary) => {
    if (selectedEvent !== '') {
      updateEvent(date, summary, selectedEvent).then(() => closeModal());
    } else {
      addEvent(date, summary).then(() => closeModal())
    }
  };

  return (
    <div className={styles.calendarList}>
      {modalOpen && <AddEvent closeModal={closeModal} addEvent={addEventData} date={selectedDate} shift={selectedShift} setSelectedShift={setSelectedShift} />}
      {getDays(events)}
      {events.map((eventRow, i) => 
        <div key={i} className={styles.eventRow}>
          {eventRow.map((event, j) => (
            <div key={event.date} className={styles.day} onClick={() => selectDate(event)}>
              {event?.shift}
              <div className={styles.date}>
                {((i*7)+1)+j}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
} 

export default CalendarList