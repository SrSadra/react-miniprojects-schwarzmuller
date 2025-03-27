import { createContext, useReducer, useState } from "react";
import { DUMMY_PRODUCTS } from "../dummy-products";


export const cartContext = createContext({
    items: [],
    addToCart: () => {},
    updateItems: () => {}
});

function CartReducer(state , action) {
    if (action.type === "ADD_ITEM"){
            const updatedItems = [...state.items];
      
            const existingCartItemIndex = updatedItems.findIndex(
              (cartItem) => cartItem.id === action.payload
            );
            const existingCartItem = updatedItems[existingCartItemIndex];
      
            if (existingCartItem) {
              const updatedItem = {
                ...existingCartItem,
                quantity: existingCartItem.quantity + 1,
              };
              updatedItems[existingCartItemIndex] = updatedItem;
            } else {
              const product = DUMMY_PRODUCTS.find((product) => product.id === action.payload);
              updatedItems.push({
                id: action.payload,
                name: product.title,
                price: product.price,
                quantity: 1,
              });
            }
      
            return {
              ...state, // if we need to have previous values
              items: updatedItems,
            };
    }
    if (action.type === "UPDATE_ITEM"){
        const updatedItems = [...state.items];
        const updatedItemIndex = updatedItems.findIndex(
          (item) => item.id === action.payload.productId
        );
  
        const updatedItem = {
          ...updatedItems[updatedItemIndex],
        };
  
        updatedItem.quantity += action.payload.amount;
  
        if (updatedItem.quantity <= 0) {
          updatedItems.splice(updatedItemIndex, 1);
        } else {
          updatedItems[updatedItemIndex] = updatedItem;
        }
  
        return {
          ...state,
          items: updatedItems,
        };
    }
}

export default function CartContextProvider({children}) { // its like component
    const [cartState , dispatch] = useReducer(CartReducer , {items: []});

      function handleAddItemToCart(id){
        dispatch({
            type: "ADD_ITEM",
            payload : id
        });
      }
    
      function handleUpdateCartItemQuantity(productId, amount) {
        dispatch({
            type : "UPDATE_ITEM",
            paylaod : {productId , amount}
        })
      }
    
      const valueCtx = {
        items: cartState.items,
        addToCart : handleAddItemToCart,
        updateItems: handleUpdateCartItemQuantity
      }
    
    return <cartContext.Provider value={valueCtx}>{children}</cartContext.Provider>
} 

