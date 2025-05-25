const redux = require("redux");

const reducerFunction = (state = {counter: 0} , action) => { // we give state a initial value bc 
    // the first time state is undefined and uses the default val
    if (action.type === "increment"){
        return {
            counter : state.counter + 1
        }
    }
    return state;

}

const store = redux.createStore(reducerFunction , );

const counterSubscriber = () => {
    const latest = store.getState() // this gives us the last snapshot of state
    console.log(latest);
}

store.subscribe(counterSubscriber) // it recieves subscriber function and will execute this function
// whenever the state changes

store.dispatch({type: 'increment'}) // this triggers the function again