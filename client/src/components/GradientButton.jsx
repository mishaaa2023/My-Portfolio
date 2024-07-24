// GradientButton.js
import React from 'react';

const GradientButton = ({ children, className, ...props }) => {
  return (
    <button
      className={`bg-gradient-to-r from-purple-500 to-pink-500 text-white flex items-center justify-center fonter t-bold py-2 px-4 rounded ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default GradientButton;