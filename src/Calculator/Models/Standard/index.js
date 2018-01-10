import { connect } from "react-redux"; 
import React from "react";
import LinearLayout from "../../LinearLayout";
import {
  Digits,
  Operators,
  DecimalDot,
  EqualAssignement,
  Controls, 
  Display
} from "../utils";

import style from "./style.scss";

const { Zero, One, Two, Three, Four, Five, Six, Seven, Eigth, Nine } = Digits;
const {
  Plus,
  Minus,
  Multiply,
  Divide,
  Negate,
  Percentage,
  Sqrt,
  Square,
  Inverse
 } = Operators;

const { CE, C, MS, MC, MPlus, MMinus } = Controls;

const STANDARD = ({expression}) => {
  //return <div> test in STANDARD </div>;
  return (
    <div id="frame">
      <Display expression={expression}/>
      <LinearLayout wrap="wrap">
        <MC />
        <MS/>
        <MPlus />
        <MMinus />
      </LinearLayout>
      <LinearLayout wrap="wrap">
        <Percentage />
        <Sqrt />
        <Square />
        <Inverse />
      </LinearLayout>
      <LinearLayout wrap="wrap">
        <CE />
        <C />
        <CE />
        <Divide />
      </LinearLayout>
      <LinearLayout wrap="wrap">
        <Seven />
        <Eigth />
        <Nine />
        <Multiply />
      </LinearLayout>
      <LinearLayout wrap="wrap">
        <Four />
        <Five />
        <Six />
        <Minus />
      </LinearLayout>
      <LinearLayout wrap="wrap">
        <One />
        <Two />
        <Three />
        <Plus />
      </LinearLayout>
      <LinearLayout wrap="wrap">
        <Negate />
        <Zero />
        <DecimalDot />
        <EqualAssignement />
      </LinearLayout>
    </div>
  );
};

const mapStateToProps = (state) =>{
  let expression = state.expression; 
  return {
    expression
  };
};

export default connect(mapStateToProps)(STANDARD); 