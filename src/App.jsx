import React, { useState } from 'react';
import AnalogClock from 'analog-clock-react';
import { format } from 'date-fns';
import { light, dark } from './clockOptions';
import DarkMode from './DarkMode';
import DarkModeToggle from './DarkModeToggle';
import './App.css';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const selectedOptions = isDarkMode ? dark : light;

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const now = new Date();
  const formattedDate = format(now, 'EEEE, MMMM d');
  const formattedTime = format(now, 'h:mm:ss a');

  return (
    <div className='container'>
      <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <DarkMode isDarkMode={isDarkMode} />
      <AnalogClock {...selectedOptions} />
        <div className='date'>
          <div>{formattedTime}</div>
          <div>{formattedDate}</div>
        </div>
    </div>
  );
};

export default App;

