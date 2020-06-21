import React from "react";
import Aux from "../../hoc/Aux";
import MenuButtons from "../MenuButtons/MenuButtons";

const head = (props) => (
  <Aux>
    <h1 style={{ color: "white" }}>TIC-TAC-TOE</h1>
    <MenuButtons resetBoard={props.clearBoard} />
    <h2 style={{ display: props.gameOver ? "block" : "none" }}>Game Over!</h2>
    <p style={{ color: "white", fontSize: "2rem", margin: "10px" }}>
      Turn: {props.turn}
    </p>
  </Aux>
);

export default head;
