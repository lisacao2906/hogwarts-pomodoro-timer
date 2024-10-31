// timer.js contains the Pomodoro timer functionality that is ultimately pulled into the app.js

import React, { useState, useEffect } from 'react';
 
// credit to AI 
const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(1500); // 25 minutes in seconds
  const [isActive, setIsActive] = useState(false);
  const [isBreak, setIsBreak] = useState(false);

  useEffect(() => {
    let timer;
    if (isActive && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      // Switch between work and break
      setIsBreak(prev => !prev);
      setTimeLeft(isBreak ? 1500 : 300); // 25 minutes or 5 minutes
    }
    return () => clearInterval(timer); // Cleanup on unmount or dependency change
  }, [isActive, timeLeft, isBreak]);

  const toggleTimer = () => {
    setIsActive(prev => !prev);
  };

  const resetTimer = () => {
    setIsActive(false);
    setIsBreak(false);
    setTimeLeft(1500); // Reset to 25 minutes
  };
  // this is where the final output for timer functionality is rendered. 
  return (
    <div className="timer">
      <h2>{isBreak ? 'Break Time' : 'Work Time'}</h2>
      <p className="time-display">
        {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
      </p>
      <button onClick={toggleTimer}>
        {isActive ? 'Pause' : 'Start'}
      </button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default Timer;
