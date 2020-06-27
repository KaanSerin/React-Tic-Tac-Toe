import React from "react";
import classes from "./Box.module.css";
import { Consumer } from "../../../Context/Context";

const box = (props) => (
  <Consumer>
    {(context) => {
      const style = context.gameOver ? classes.disabled : "";
      return (
        <div className={`${classes.Box} ${style}`} onClick={props.click}>
          {props.children}
        </div>
      );
    }}
  </Consumer>
);

export default box;
