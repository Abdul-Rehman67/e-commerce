// import {createStore,combineReducers,applyMiddleware} from 'redux'
// import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'
// const reducer = combineReducers({});
// const initialState ={};
// const middleware = [thunk];
// const store = createStore (reducer,initialState,composeWithDevTools(applyMiddleware([...middleware])))
// export default store

// Copy code
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import counter from './reducer.js/index'; 
const middleware = [thunk]
let initialState ={}

const store = createStore(counter, composeWithDevTools(applyMiddleware([...middleware])));
export default store