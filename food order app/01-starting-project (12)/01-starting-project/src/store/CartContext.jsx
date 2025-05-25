import { createContext, useReducer } from "react";

const CartContext = createContext({
    items : [],
    addItem : (item) => {},
    removeItem : (id) => {},
    clearCart: () => {}
});


function CartContextReducer(state , action) {
    if (action.type === "ADD_ITEM"){
        const index = state.items.findIndex((item) => item.id === action.item.id);

        let updatedItems;
        if (index > -1) {
          // Item exists in the cart, update its quantity
          const myItem = state.items[index];
          const updatedItem = {
            ...myItem,
            quantity: myItem.quantity + 1,
          };
          updatedItems = [...state.items]; // Create a new array
          updatedItems[index] = updatedItem; // Update the item in the new array
        } else {
          // Item does not exist, add it to the cart
          updatedItems = [...state.items, { ...action.item, quantity: 1 }]; // Create a new array with the new item
        }
        
        return { ...state, items: updatedItems }; // Return a new state object
    }
    if (action.type === "REMOVE_ITEM") {
        const index = state.items.findIndex((item) => item.id === action.id);
        const myItem = state.items[index];

        let updatedItems;
        if (myItem.quantity === 1) {
            // Remove the item from the array
            updatedItems = state.items.filter((item) => item.id !== action.id);
        } else {
            // Decrease the quantity of the item
            const updatedItem = {
                ...myItem,
                quantity: myItem.quantity - 1,
            };
            updatedItems = [...state.items]; // Create a new array
            updatedItems[index] = updatedItem; // Update the item in the new array
        }

        console.log("updatedItems:", updatedItems); // Logs the correct updated array
        return { ...state, items: updatedItems }; // Return a new state object
    }
    if (action.type === "CLEAR_CART"){
        return {...state, items : [] };
    }
}


export function CartContextProvider({children}){
    const [cart , dispatchCartAction] = useReducer(CartContextReducer , {items: []});

    function addItem(item){
        dispatchCartAction({type : "ADD_ITEM" , item});
    }

    function removeItem(id){
        console.log(("id222" , id));
        
        dispatchCartAction({type : "REMOVE_ITEM" , id});
    }

    function clearCart(){
        dispatchCartAction({type: "CLEAR_CART"});
    }

    const cartCtx = { // when the cart change here the cartCtx will also change and since
        //we passed it as value to provider also in other components that use this context will chnage
        items: cart.items,
        addItem : addItem,
        removeItem : removeItem,
        clearCart
    }

    return <CartContext.Provider value={cartCtx}>{children}</CartContext.Provider>
}

export default CartContext;