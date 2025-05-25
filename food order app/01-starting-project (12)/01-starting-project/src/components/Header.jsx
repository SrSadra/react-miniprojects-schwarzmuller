import React, { useContext } from 'react'
import HeaderLogo from "../assets/logo.jpg"
import Button from './Button'
import CartContext from '../store/CartContext'
import UserProgress from '../store/UserProgressContext'

const Header = () => {
    const {items} = useContext(CartContext);
    const {showCart} = useContext(UserProgress)

    const totalCartItems = items.reduce((total , item) => total + item.quantity , 0);

    function handleShowCart(){
      showCart();
    }

  return (
    <div className='main-header'>
      <div className='title'>
        <img src={HeaderLogo}></img>
        <p></p>
      </div>

      <nav>
        <Button textOnly onClick={handleShowCart}>CART ({totalCartItems})</Button>
        
      </nav>
    </div>
  )
}

export default Header
