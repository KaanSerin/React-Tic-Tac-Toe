import React from "react";
import MenuButton from "./MenuButton/MenuButton";
import classes from "./MenuButtons.module.css";

const menuButtons = (props) => (
  <div className={classes.MenuButtons}>
    <MenuButton>Versus AI</MenuButton>
    <MenuButton>2 Players</MenuButton>
    <MenuButton click={props.resetBoard}>Reset Board</MenuButton>
    <MenuButton click={props.resetScore}>Reset Score</MenuButton>
  </div>
);

export default menuButtons;
