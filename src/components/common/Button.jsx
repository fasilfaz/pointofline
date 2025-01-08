import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = 'px-6 py-3 rounded-md font-medium transition-all duration-300';
  
  const variants = {
    primary: 'bg-blue-900 text-white hover:bg-blue-800',
    secondary: 'bg-transparent border-2 border-blue-900 text-blue-900 hover:bg-blue-50',
    outline: 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900'
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;