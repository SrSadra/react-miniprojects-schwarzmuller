import { createSlice } from "@reduxjs/toolkit";


const initialState = {isShown : false , notification : null};

const uiSlice = createSlice({
    name : "ui",
    initialState,
    reducers  : {
        toggle(state){
            state.isShown = !state.isShown
        },
        setNotification(state , action){
            state.notification = action.payload
        }
    }
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;