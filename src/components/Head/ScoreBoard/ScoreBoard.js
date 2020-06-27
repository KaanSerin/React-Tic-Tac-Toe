import React from "react";
import { Consumer } from "../../../Context/Context";
import classes from "./ScoreBoard.module.css";

const scoreBoard = (props) => (
  <Consumer>
    {(context) => (
      <div className={classes.ScoreBoard}>
        <h3>X Score: {context.xScore}</h3>
        <h3>O Score: {context.oScore}</h3>
      </div>
    )}
  </Consumer>
);

export default scoreBoard;
