import { createStore } from "redux";
import reducer from "./reducers.js"; 

const initialState = {
  expression:"0",
};

const store = createStore(reducer,initialState); 

export default store;