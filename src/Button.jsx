import React from 'react';

function Button({children,onClick,friend}) {
  return (
    <button className='button' onClick={onClick}>
      {children}
    </button>
  ); 
}

export default Button;