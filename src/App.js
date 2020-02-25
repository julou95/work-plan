import React, { useEffect } from 'react';
import cx from 'classnames';
import styles from './App.scss';
import history from './createHistory';
import { Switch, Route } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';
import ToDo from './components/ToDo/ToDo';
import Cart from './components/Cart/Cart';
import AGB from './components/agb/agb';
import CookingIdeas from './components/CookingIdeas/CookingIdeas';
import Firebase from './containers/Firebase';

import CalendarContainer from './containers/Calendar';
import Calendar from './components/Calendar/Calendar';

export const App = () => {
  useEffect(() => {
    const route = history.location.hash;
    const width = window.innerWidth;
    let acc;
    switch (route) {
      case '#/#second':
        acc = 1;
        break;
      case '#/#third':
        acc = 2;
        break;
      case '#/#fourth':
        acc = 3;
        break;
      default:
        acc = 0;
        break;
    }
    document.getElementById('APP').scroll(acc*width, 0);
  }, []);

  return (
    <div>
      <Switch>
        <Route exact path="/agb">
          <AGB />
        </Route>
        <Route path="/">
          <div id="APP" className={styles.App}>
            <Navigation />
            <div id="first" className={cx(styles.section, styles.first)}>
              <div className={styles.container}>
                <CalendarContainer>
                  <Calendar />
                </CalendarContainer>
              </div>
            </div>
            <div id="second" className={cx(styles.section, styles.second)}>
              <div className={styles.container}>
                <Firebase collection={'cart'}>
                  <Cart />
                </Firebase>
              </div>
            </div>
            <div id="third" className={cx(styles.section, styles.third)}>
              <div className={styles.container}>
                <Firebase collection={'meals'}>
                  <CookingIdeas />
                </Firebase>
              </div>
            </div>
            <div id="fourth" className={cx(styles.section, styles.fourth)}>
              <div className={styles.container}>
                <h1>4th section</h1>
              </div>
            </div>
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
