import React, { useState } from 'react'

const InputHandler = ({ name, value, onChange }) => {
  return (
    <div id="user-input">
      <label>{name}</label>
      <input 
        type="number" 
        required 
        value={value} 
        onChange={(e) => onChange(name, e.target.value)} 
      />
    </div>
  );
};

export default InputHandler;
