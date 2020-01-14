import React from 'react';
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'
import './App.css';
import history from './createHistory';
import Navigation from './components/Navigation/Navigation';

export const App = () => {
  const scrollHandler = () => {
    const container = window.pageYOffset / window.innerHeight;
    switch (container) {
      case 0:
        history.push({ hash: '#first' })
        return;
      case 1:
        history.push({ hash: '#second' })
        return;
      case 2:
        history.push({ hash: '#third' })
        return;
      case 3:
        history.push({ hash: '#fourth' })
        return;
      default:
        return;
    }
    
  };

  document.addEventListener('scroll', scrollHandler);

  return (
    <div className="App">
      <Navigation />
      <div id="first" className="section first">
        <div className="container">
          <h1>1st section</h1>
        </div>
      </div>
      <div id="second" className="section second">
        <div className="container">
          <h1>2nd section</h1>
        </div>
      </div>
      <div id="third" className="section third">
        <div className="container">
          <h1>3rd section</h1>
        </div>
      </div>
      <div id="fourth" className="section fourth">
        <div className="container">
          <h1>4th section</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
