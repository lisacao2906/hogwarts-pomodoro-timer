import React from 'react';
import Timer from './timer';
import Quote from './quote';
import './App.css';  


// my goal is for this app.js file to be the place that combine the Timer and Quote function, offering readability :)


const App = () => {
  return (
    <div className="app">
      <h1 style={{ fontFamily: 'Calibri' }}>Hogwarts Pomodoro Timer</h1>
      <Timer /> 
      <Quote />
    </div>
  );
};

export default App;