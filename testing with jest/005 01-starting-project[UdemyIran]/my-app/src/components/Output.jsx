import React from 'react'

const Output = ({children , props}) => {
  return (
    <p {...props}>
      {children}
    </p>
  )
}

export default Output
