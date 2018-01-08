import React from "react"; 
import DIGITS from "../constant.js";

import style from "./style.scss"

function createButton ({digit}) {
  return (
    <button className="digit-button">{digit}</button>
  );
} 

var Digits = {};
Digits.Zero = createButton.bind(null, {digit:0}); 
Digits.One = createButton.bind(null, {digit:1});
Digits.Two = createButton.bind(null, {digit:2});
Digits.Three = createButton.bind(null, {digit:3});
Digits.Four = createButton.bind(null, {digit:4});
Digits.Five = createButton.bind(null, {digit:5});
Digits.Six = createButton.bind(null, {digit:6});
Digits.Seven = createButton.bind(null, {digit:7});
Digits.Eigth = createButton.bind(null, {digit:8});
Digits.Nine = createButton.bind(null, {digit:9});


export default Digits; 