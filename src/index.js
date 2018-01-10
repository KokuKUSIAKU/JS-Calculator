import React from "react";
import { Provider } from "react-redux";
import { render } from "react-dom";
import { store } from "./calculator/CalculatorEngine";
//import CalculatorFrame from "./CalculatorFrame";
import Calculator from "./Calculator";

render(
  <Provider store={store}>
    <Calculator />
  </Provider>,
  document.getElementById("app")
); 