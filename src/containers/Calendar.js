import {cloneElement, useState} from 'react';

const Calendar = ({ children }) => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [events, setEvenets] = useState([]);

  const clientId = process.env.CLIENT_ID;
  const apiKey = process.env.API_KEY;
  const calendarId = process.env.CALENDAR_ID;

  const discoveryDocs = [
    'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest',
  ];
  const scope = 'https://www.googleapis.com/auth/calendar';

  const handleClientLoad = () => {
    if (window.gapi) {
      window.gapi.load('client:auth2', initClient);
    }
  };

  const initClient = () => {
    window.gapi.client.init({
      apiKey,
      clientId,
      discoveryDocs,
      scope,
    }).then(() => {
      // Listen for sign-in state changes.
      window.gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

      // Handle the initial sign-in state.
      updateSigninStatus(window.gapi.auth2.getAuthInstance().isSignedIn.get());
    });
  };

  const updateSigninStatus = (isSignedIn) => {
    setIsSignedIn(isSignedIn)
  };

  const handleAuthClick = (event) => {
    window.gapi.auth2.getAuthInstance().signIn();
  };

  /**
   *  Sign out the user upon button click.
   */
  const handleSignoutClick = () => {
    window.gapi.auth2.getAuthInstance().signOut();
  };

  const addLeadingZero = (date) => {
    return ('0'+date).slice(-2)
  };

  const lastDayOfMonth = (m) => {
    const date = new Date();
    const newDate = new Date(date.getFullYear(), m, 0);

    const year = newDate.getFullYear();
    const month = addLeadingZero(m);
    const day = addLeadingZero(newDate.getDate());

    return new Date(`${year}-${month}-${day}T23:59:59`).toISOString();
  };

  const firstDayOfMonth = (m) => {
    const date = new Date();
    const newDate = new Date(date.getFullYear(), m, 1);

    const year = newDate.getFullYear();
    const month = addLeadingZero(m+1);
    const day = addLeadingZero(newDate.getDate());

    return new Date(`${year}-${month}-${day}`).toISOString();
  };

  const mapEvents = (events) =>  events.map((event) => ({
    date: event.start.date,
    shift: event.summary,
    id: event.id,
  }));

  const listUpcomingEvents = (month) => {
    const firstDay = firstDayOfMonth(month-1);
    const lastDay = lastDayOfMonth(month);

    if (!window.gapi.client?.calendar) {
      handleClientLoad().then(() => {
        handleAuthClick();
      });
    }

    window.gapi.client.calendar.events.list({
      calendarId,
      'timeMin': new Date(firstDay).toISOString(),
      'timeMax': new Date(lastDay).toISOString(),
      'showDeleted': false,
      'singleEvents': true,
      'orderBy': 'startTime'
    }).then((response) => {
      const events = response.result.items;
      
      if (events.length > 0) {
        setEvenets(mapEvents(events));
      } else {
        console.log('No upcoming events found.');
      }
    });
  };

  const addEvent = (date, summary) => new Promise((resolve, reject) => {
    window.gapi.client.calendar.events.insert({
      calendarId,
      resource: {
        summary,
        start: {
          date,
        },
        end: {
          date,
        }
      }
    }).execute(() => {
      listUpcomingEvents(date.split('-')[1]);
      resolve(true);
    });
  });

  const updateEvent = (date, summary, eventId) => new Promise((resolve, reject) => {
    window.gapi.client.calendar.events.update({
      calendarId,
      eventId,
      summary,
        start: {
          date,
        },
        end: {
          date,
        }
    }).execute(() => {
      listUpcomingEvents(date.split('-')[1]);
      resolve(true);
    });
  })

  return cloneElement(children, {
    handleClientLoad,
    isSignedIn,
    handleAuthClick,
    handleSignoutClick,
    listUpcomingEvents,
    events,
    addEvent,
    updateEvent,
  });
}

export default Calendar;