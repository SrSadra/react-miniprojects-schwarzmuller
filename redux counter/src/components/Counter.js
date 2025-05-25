import classes from './Counter.module.css';
import {useSelector, useDispatch} from "react-redux"
import {counterActions} from "../store/counterSlice"

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter); {/*useSelector also gives us subscription ability so if counter changed in another comp it will be updated here */}
  const visible = useSelector(state => state.counter.visible); // state.counter gives you the specific slice 

  const toggleCounterHandler = () => {};

  const onIncreament = () => {
    console.log("mamaddd");
    
    // dispatch({type: "increment"})
    dispatch(counterActions.increment());
  }

  const onIncrease = () => {
    // dispatch({type : "increase" , value: 1006})
    dispatch(counterActions.increment(1006)); // the input intrepret as payload:1006
  }

  const onDecrement = () => {
    // dispatch({type: "decrement"})
    dispatch(counterActions.decrement());
  }

  const onShow = () => {
    // dispatch({type: "toggle"})
    dispatch(counterActions.toggle());
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {visible && <div className={classes.value}>{counter}</div>} 
      <div className=''>
        <button onClick={onIncreament}>increment</button>
        <button onClick={onIncrease}>increase</button>
        <button onClick={onDecrement}>decrement</button>
        <button onClick={onShow}>show counter</button>
      </div>
    </main>
  );
};

export default Counter;
