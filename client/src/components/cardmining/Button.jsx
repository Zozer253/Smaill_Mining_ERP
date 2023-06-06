import React from 'react';
import "./Button.css"

const Button = ({ bgcolor, textcolor, text, onClick }) => {
  return (
    <button className={bgcolor} style={{ color: textcolor }} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
