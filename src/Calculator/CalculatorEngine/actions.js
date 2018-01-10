function updateExpression(expresion){
  return {
    type:"UPDATE-EXPRESSION",
    expresion
  };
}

function calculateExpression(){
  return {
    type:"CALCULATE",
  };
} 

export {
  updateExpression,
  calculateExpression
};