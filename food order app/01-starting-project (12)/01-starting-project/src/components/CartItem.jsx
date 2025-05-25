import React from 'react'

const CartItem = ({name , quantity , price , onInc , onDec}) => {
  return (  
    <li>
    <p>{name} - {quantity} X {price}</p>
    <div>
        <button onClick={onInc}>+</button>
        <p>{quantity}</p>
        <button onClick={onDec}>-</button>
    </div>
    </li>
  )
}

export default CartItem
