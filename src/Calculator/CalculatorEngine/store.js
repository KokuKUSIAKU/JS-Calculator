import { createStore } from "redux";
import reducer from "./reducers.js"; 

const initialState = {
  expression:"test cccc",
};

const store = createStore(reducer,initialState); 

export default store;