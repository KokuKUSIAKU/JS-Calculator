import { combine } from "react-redux"; 

function expression(state={}, action){
  if(action.type =="UPDATE-EXPRESSION"){
    return Object.assign({}, {expression:state.expression + action.expression}); 
  }
  if(action.type == "CALCULATE"){
    //state.expressionHistory.push(action.expression); 

    try {
      Object.assign({}, {expression:eval(state.expression)});
    } catch(e) {
      Object.assign({}, {error:true, errorMessage:e.message}); 
    }
  }
  return state;
}

export default expression; 