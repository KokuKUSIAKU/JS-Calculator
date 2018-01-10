import React from "react";
import style from "./style.scss";

function Display({ expression }) {
  return (
    <div id="display-frame">
      <div id="display">{expression}</div>
    </div>
  );
}

export default Display; 