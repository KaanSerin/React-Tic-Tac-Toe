import React from "react";
import classes from "./Board.module.css";
import Box from "./Box/Box";

const board = (props) => {
  const boxes = Object.keys(props.board).map((key) => {
    return (
      <Box key={key} click={() => props.clickHandler(key)}>
        {props.board[key]}
      </Box>
    );
  });

  return <div className={classes.Board}>{boxes}</div>;
};
export default board;
