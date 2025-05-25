import { configureStore, createSlice } from "@reduxjs/toolkit";
import { legacy_createStore as createStore} from "redux";

import counterReducer from "./counterSlice"
import authReducer from "./authSlice"

// const store = createStore(reducerFunc);




const store = configureStore({ // this will be combined by redux to one single reducer since store only recieves one reducer
    reducer : {counter: counterReducer, auth: authReducer}
});



export default store;

