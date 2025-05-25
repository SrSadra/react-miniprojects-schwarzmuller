import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./uiSlice";



const initialState = {items: [] , totalItem: 0, isChanged: false}

const cartSlice = createSlice({
    name : "cart",
    initialState : initialState,
    reducers : {
        replaceCart(state , action){
            state.isChanged = false;
            state.items = action.payload.items;
            state.totalItem = action.payload.totalItem;
        },
        addItem(state , action){
            state.isChanged = true;
            const newItem = action.payload;
            const isExist = state.items.find(item => item.id === newItem.id);
            if (!isExist){
                state.items.push({
                    id: newItem.id,
                    totalPrice : newItem.price,
                    quantity : 1,
                    price : newItem.price
                })
                state.totalItem++;
            }
            else{
                isExist.quantity++;
                isExist.totalPrice += newItem.price;
            }
        },
        removeItem(state,action){
            state.isChanged = true;
            const id = action.payload;
            const item = state.items.find(item => item.id === id);
            if (item.quantity === 1){
                state.items = state.items.filter(item => item.id !== id);
                state.totalItem--;
            }else{
                item.quantity--;
                item.totalPrice -= item.price
            }
            

        }
    }
});

// in App.js after isInitial
// dispatch(sendCartData(cart)) for triggering


export const getCartData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const res = await fetch("" , {method : "GET"});

            if (!res){
                throw Error("fetching data failed");
            }

            const cartData = res.json();
            return cartData;
        }

        try{
            const cartData = await fetchData(); // this is updated cart
            dispatch(cartActions.replaceCart({
                items: cartData.items || [], // this prevents items to be undefined from backend
                ...cartData
            }))
        }catch(err){
            dispatch(uiActions.setNotification({status : "error"}))
        }
    }
}

export const sendCartData = (cart) => { // this is our action creator
    return async (dispatch) => {
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

        try{
            await sendingData();
        }catch (err){
            dispatch(uiActions.setNotification({status : "error"}))
        }
    }
}

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;