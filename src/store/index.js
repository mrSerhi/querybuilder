import { createStore, combineReducers, compose } from "redux";
import queryReducer from "./queryReducer";

const initState = {};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({ query: queryReducer });

const store = createStore(reducer, initState, composeEnhancers());

export default store;
