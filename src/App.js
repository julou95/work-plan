import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <div id="first" className="section first">
        <h1>1st section</h1>
      </div>
      <div id="second" className="section second">
        <h1>2nd section</h1>
      </div>
      <div id="third" className="section third">
        3rd section
      </div>
      <div id="fourth" className="section fourth">
        4th section
      </div>
    </div>
  );
}

export default App;
