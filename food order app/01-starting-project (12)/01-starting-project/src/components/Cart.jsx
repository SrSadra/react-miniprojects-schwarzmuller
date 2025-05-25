import React, { useContext } from 'react'
import Modal from './Modal'
import CartContext from '../store/CartContext'
import Button from './Button';
import UserProgress from '../store/UserProgressContext';
import CartItem from './CartItem';

const Cart = () => {
    const {items ,addItem , removeItem} = useContext(CartContext);
    const {progress , hideCart, showCheckout} = useContext(UserProgress)

    const totalPrice = items.reduce((total , item) => total + item.price * item.quantity , 0);

    function handleHideCart(){
        hideCart();
    }

    function onHandleCheckout(){
      showCheckout();
    }

    function onQuantityInc(item){
      addItem(item);
    }

    function onQuantityDec(id){
      console.log("idd" , id);
      removeItem(id);
    }

  return (
    <Modal open={progress === "cart"} onClose={progress === "cart" ? handleHideCart: null} >
      <h2>Your Cart</h2>
      <ul>
        {items.map((item) => (
          <CartItem key={item.id} name={item.name} quantity={item.quantity} price={item.price} onInc={() => onQuantityInc(item)} onDec={() => onQuantityDec(item.id)}/>
      ))}
      </ul>
      <h3>total : {totalPrice}</h3>
      <div>
        <Button onClick={onHandleCheckout} textOnly>Check out</Button>
        <Button onClick={handleHideCart}>Close dialog</Button>
      </div>
    </Modal>
  )
}

export default Cart
