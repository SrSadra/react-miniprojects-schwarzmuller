import classes from './CartButton.module.css';
import { uiActions } from '../../store/uiSlice';
import { useDispatch, useSelector } from 'react-redux';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const itemsQuantity = useSelector(state => state.cart.totalItem);

  const onToggle = () => {
    dispatch(uiActions.toggle());
  }

  return (
    <button className={classes.button} onClick={onToggle}>
      <span>My Cart</span>
      <span className={classes.badge}>{itemsQuantity}</span>
    </button>
  );
};

export default CartButton;
