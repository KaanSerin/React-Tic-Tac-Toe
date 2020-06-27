import React, { useEffect } from "react";
import Aux from "../../hoc/Aux";
import MenuButtons from "../MenuButtons/MenuButtons";

const Head = (props) => {
  useEffect(() => {
    console.log("Head component render");
  }, [props.gameOver, props.turn]);

  return (
    <Aux>
      <h1 style={{ color: "white" }}>TIC-TAC-TOE</h1>
      <MenuButtons resetBoard={props.clearBoard} />
      <h2
        style={{ color: "white", display: props.gameOver ? "block" : "none" }}
      >
        Game Over! {props.playerWon} is Victorious!
      </h2>
      <p style={{ color: "white", fontSize: "2rem", margin: "10px" }}>
        Turn: {props.turn}
      </p>
    </Aux>
  );
};

export default Head;
