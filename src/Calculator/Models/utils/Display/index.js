import React from "react"; 
import style from "./style.scss";

function Display ({expression}) {
  return (
    <div id="display">{expression}</div>
  );
}

export default Display; 