import { combine } from "react-redux"; 

function expression(state={}, action){
  if(action.type =="UPDATE-EXPRESSION"){
    if(state.expression==="0"){
      return Object.assign({}, state, {expression:action.expression.toString()}); 
    } else {
      return Object.assign({}, state, {expression:state.expression + action.expression.toString()}); 
    }
     
  }
  if(action.type == "CALCULATE"){
    try {
      Object.assign({}, {expression:eval(state.expression)});
    } catch(e) {
      Object.assign({}, {error:true, errorMessage:e.message}); 
    }
  }
  return state;
}

export default expression; 