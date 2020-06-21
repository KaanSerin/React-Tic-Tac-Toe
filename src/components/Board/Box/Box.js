import React from "react";
import classes from "./Box.module.css";

const box = (props) => (
  <div className={classes.Box} onClick={props.click}>
    {props.children}
  </div>
);

export default box;
