import React from 'react'

const ListButtons = ({children , onSelect}) => {
  return (
    <li><button onClick={onSelect} >{children}</button></li>
  )
}

export default ListButtons
