import React from 'react'
import InputHandler from './InputHandler'

const InputBox = ({ inputs, onInputChange }) => {
    return (
      <div className="input-group">
        {Object.keys(inputs).map((key) => (
          <InputHandler 
            key={key} 
            name={key} 
            value={inputs[key]} 
            onChange={onInputChange} 
          />
        ))}
      </div>
    );
  };
  
  export default InputBox;