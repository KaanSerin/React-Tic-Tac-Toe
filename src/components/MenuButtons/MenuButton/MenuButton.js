import React from "react";
import classes from "./MenuButton.module.css";

const menuButton = (props) => (
  <button onClick={props.click} className={classes.btnHead}>
    {props.children}
  </button>
);

export default menuButton;
