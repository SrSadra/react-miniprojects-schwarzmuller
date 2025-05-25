import { createSlice } from "@reduxjs/toolkit";

const authInitialState = {isAuth: false};

const authSlice = createSlice({
    name: "Authentication",
    initialState : authInitialState,
    reducers : {
        signIn(state){
            state.isAuth = true;
        },
        logOut(state){
            state.isAuth = false;
        }
    }
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
