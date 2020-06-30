import React from "react";
import classes from "./Box.module.css";
import { Consumer } from "../../../Context/Context";

const box = (props) => (
  <Consumer>
    {(context) => {
      return (
        <div
          style={{ cursor: context.gameOver ? "not-allowed" : "pointer" }}
          className={classes.Box}
          onClick={props.click}
        >
          {props.children}
        </div>
      );
    }}
  </Consumer>
);

export default box;
