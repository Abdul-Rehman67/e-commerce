// actions.js

export const increment = () => ({
    type: 'INCREMENT'
  });
  
  export const decrement = () => ({
    type: 'DECREMENT'
  });
  
  // reducers.js
  
  const initialState = {
    count: 0
  };
  
  function counter(state = initialState, action) {
    switch (action.type) {
      case 'INCREMENT':
        return { count: state.count + 1 };
      case 'DECREMENT':
        return { count: state.count - 1 };
      default:
        return state;
    }
  }
  
  export default counter;
  