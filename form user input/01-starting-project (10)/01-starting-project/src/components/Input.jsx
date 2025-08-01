import React from 'react'

const Input = ({label , id ,  error, ...props}) => {
  return (
    <div className="control-row">
    <div className="control no-margin">
      <label htmlFor={label}>{label}</label>
      <input id={id}   {...props} />
      {!error &&<p>{error}</p>}
    </div>
    </div>
  )
}

export default Input
