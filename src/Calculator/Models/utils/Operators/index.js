import React from "react"; 
import style from "./style.scss";

function createButton ({operator}) {
  return (
    <button className="operator-button">
      {operator}
    </button>
  );
} 

// unfortunately, many browser don't support MathML yet 
// https://caniuse.com/#search=math

var Operators = {};
Operators.Plus = createButton.bind(null, {operator:<math><mo>+</mo></math>}); 
Operators.Minus = createButton.bind(null, {operator:<math><mo>-</mo></math>});
Operators.Multiply = createButton.bind(null, {operator:<math><mo>x</mo></math>});
Operators.Divide = createButton.bind(null, {operator:<math><mo>/</mo></math>});
Operators.Negate = createButton.bind(null, {operator:<math><mo>&#177;</mo></math>});
Operators.Sqrt = createButton.bind(null, {operator:<math><mi>&#8730;</mi></math>});
Operators.Percentage = createButton.bind(null, {operator:<math><mo>&#37;</mo></math>});
Operators.Square = createButton.bind(null, {operator:<p>x<sup>2</sup></p>});
Operators.Inverse = createButton.bind(null, {operator:<p><sup>1</sup>/<sub>x</sub></p>});


export default Operators; 