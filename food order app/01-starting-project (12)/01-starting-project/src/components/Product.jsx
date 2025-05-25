import React, { useContext, useEffect } from 'react'
import Button from './Button'
import CartContext from '../store/CartContext'

const Product = ({meals}) => {
  const {addItem} = useContext(CartContext)

  function addToCart(){
    addItem(meals);
  }

  return (
    <li className='meal-item'>
      <img src={`http://localhost:3000/${meals.image}`} alt='meals pic'/>
      <article>
        <h3>{meals.name}</h3>
        <p className='meal-item-description'>{meals.description}</p>
        <p>${meals.price}</p>
      </article>
      <p>
        <Button onClick={addToCart}>Add To Cart</Button>
      </p>
    </li>
  )
}

export default Product
