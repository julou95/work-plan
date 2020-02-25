import React, { useState } from 'react';
import scriptjs from 'scriptjs';

import Loader from '../Loader/Loader';

import CalendarList from './CalendarList';
import CalendarSwitch from './CalendarSwitch';
import styles from './CalendarList.scss';

const Calendar = ({
  handleClientLoad,
  isSignedIn,
  handleAuthClick,
  handleSignoutClick,
  listUpcomingEvents,
  events,
  addEvent,
  updateEvent,
}) => {
  const actualMonth = new Date().getMonth() + 1;
  const [activeMonth, setActiveMonth] = useState(actualMonth);

  if (isSignedIn && !events.length) {
    listUpcomingEvents(activeMonth);
  }

  const addLeadingZero = (date) => {
    return ('0'+date).slice(-2)
  };

  const mapOnMonth = (unmappedEvents) => {
    const date = new Date();
    const newDate = new Date(date.getFullYear(), activeMonth, 0);
    const lastDay = newDate.getDate();

    const newMap = [];
    for (let i = 1; i <= lastDay; i++) {
      const searchDate = `${date.getFullYear()}-${addLeadingZero(activeMonth)}-${addLeadingZero(i)}`;
      const filteredEvent = unmappedEvents.filter(event => event.date === `${date.getFullYear()}-${addLeadingZero(activeMonth)}-${addLeadingZero(i)}`)?.[0];
      newMap.push({
        date: searchDate,
        shift: filteredEvent?.shift || '',
        id: filteredEvent?.id || ''
      })
    }
    return newMap;
  };

  const setActualMonth = (month) => {
    listUpcomingEvents(month);
    setActiveMonth(month);
  };

  const chunk = (arr, size) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size)
    );

  return (
    <div className={styles.calendarContainer}>
      {scriptjs('https://apis.google.com/js/api.js', () => handleClientLoad('test'))}
      { 
        (!isSignedIn ||(isSignedIn && !events.length)) &&
          <div onClick={handleAuthClick}>
            <Loader />
          </div>
      }
      {
        !!events.length &&
          <div className={styles.calendarWrap}>
          <CalendarSwitch actualMonth={activeMonth} setMonth={setActualMonth} />
          <CalendarList
            events={chunk(mapOnMonth(events), 7)}
            addEvent={addEvent}
            updateEvent={updateEvent}
          />
        </div>
      }
    </div>
  );
};

export default Calendar;
