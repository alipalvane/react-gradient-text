import React from 'react';
import './GradientText.css';

const GradientText = ({ children }) => {
  return (
    <div className="gradient-text">
      {children}
    </div>
  );
};

export default GradientText;
