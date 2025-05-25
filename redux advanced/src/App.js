import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { Fragment, useEffect } from 'react';
import { uiActions } from './store/uiSlice';
import Notification from './components/UI/Notification';
import { getCartData } from './store/cartSlice';


let isInitial = true;

function App() {
  const isShown = useSelector(state => state.ui.isShown);
  const cart = useSelector(state => state.cart) // this is the whole cart slice 
  const dispatch = useDispatch();
  const notification = useSelector(state => state.ui.notification);


  useEffect(() => {
    dispatch(getCartData())
  }, [dispatch]) // dispatch is never change
  

  useEffect(() => { // this is executed when cart slice is changed . so useselector gives a subscription and everytime cart chnages we are informed here

    dispatch(uiActions.setNotification({status : "pending"}))

    const sendingData = async () => {
      const res = await fetch("" , {
        method: "PUT",
        body: JSON.stringify(cart)
      });

      if (!res.ok){
        dispatch(uiActions.setNotification({status : "error"}))
      };

      //success
      dispatch(uiActions.setNotification({status : "success"}))
    }

    if (isInitial){ // this prevents udpating cart in the first initialization, so after some adding/remo instead
      isInitial = false;
      return;
    }

    if (cart.isChanged){ // we want to update cart only if item is added or removed not by getting cart
      sendingData().catch((err) => { // this is when the function is executed
      //error
      dispatch(uiActions.setNotification({status : "error"}))
      })
    }
    

  }, [cart , dispatch]) // dispatch here doesnt trigger re-run of useEffect


  return (
    <Fragment>
    {notification && <Notification status={notification.status} />} {/* this is important to add notification in first place to prevent errors coming from notification being null */}
    <Layout>
      {isShown && (<Cart />)}
      <Products />
    </Layout>
    </Fragment>
  );
}

export default App;
