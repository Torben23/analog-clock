import React, { useEffect } from 'react';

const DarkMode = ({ isDarkMode }) => {
  useEffect(() => {
    const body = document.querySelector('body');
    const gradientStart = isDarkMode ? '#000000' : '#f4796b';
    const gradientEnd = isDarkMode ? '#000123' : '#fff067';    
    body.style.backgroundImage = `linear-gradient(to bottom, ${gradientStart}, ${gradientEnd})`;
  }, [isDarkMode]);

  return null;
};

export default DarkMode;