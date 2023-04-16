import React, { useState } from 'react';

const DarkModeToggle = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <label className='switch'>
      <input type='checkbox' onChange={toggleDarkMode} checked={isDarkMode} />
      <span className='slider'></span>
    </label>
  );
};

export default DarkModeToggle;
