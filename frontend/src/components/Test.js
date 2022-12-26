import React from 'react'
import { increment, decrement } from '../store/reducer.js/index';
import { useDispatch } from 'react-redux';


const Test = () => {
    const dispatch = useDispatch();

  const incrementAsync = () => dispatch(increment());
  const decrementAsync = () => dispatch(decrement());
  return (
    <div>
    <button onClick={incrementAsync}>Increment</button>
    <button onClick={decrementAsync}>Decrement</button>
    </div>
  )
}

export default Test
