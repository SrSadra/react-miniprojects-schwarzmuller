import { createSlice } from "@reduxjs/toolkit"

const counterSlice = createSlice({
    name: "counter",
    initialState : {counter : 0, visible : true},
    reducers: {
        increment(state){
            state.counter++
        },
        decrement(state){
            state.counter--
        },
        increase(state, action){
            state.counter = state.counter + action.value
        },
        toggle(state, action){
            state.visible = !state.visible 
        }
    }
})

const reducerFunc = (state = {counter : 0, visible : true}, action) => {
    if (action.type === "increment"){
        return {
            counter : state.counter + 1,
            visible : state.visible
        }
    }
    else if (action.type === "increase"){
        return {
            counter : state.counter + action.value,
            visible : state.visible
        }
    }
    else if (action.type === "decrement"){
        return {
            counter : state.counter - 1,
            visible : state.visible
        }
    }
    else if (action.type === "toggle"){
        return {
            counter : state.counter,
            visible : !state.visible
        }
    }

    return state;
}

export const counterActions = counterSlice.actions;


export default counterSlice.reducer;
