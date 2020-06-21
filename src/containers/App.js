import React, { Component } from "react";
import Board from "../components/Board/Board";
import Head from "../components/Head/Head";

import "./App.css";

class App extends Component {
  state = {
    board: {
      box0: null,
      box1: null,
      box2: null,
      box3: null,
      box4: null,
      box5: null,
      box6: null,
      box7: null,
      box8: null,
    },
    currentPlayer: "X",
    gameOver: false,
  };

  boxClickHandler = (box) => {
    const newBoard = this.state.board;
    newBoard[box] = this.state.currentPlayer;
    const newCurrentPlayer = this.state.currentPlayer === "X" ? "O" : "X";
    this.setState({ board: newBoard, currentPlayer: newCurrentPlayer });
    this.evaluateBoard(this.state.board);
  };

  clearBoard = () => {
    this.setState({
      board: {
        box0: null,
        box1: null,
        box2: null,
        box3: null,
        box4: null,
        box5: null,
        box6: null,
        box7: null,
        box8: null,
      },
      currentPlayer: "X",
    });
  };
  evaluateBoard = (board) => {};

  render() {
    return (
      <div className="App">
        <Head
          gameOver={this.state.gameOver}
          turn={this.state.currentPlayer}
          clearBoard={this.clearBoard}
        />
        <Board board={this.state.board} clickHandler={this.boxClickHandler} />
      </div>
    );
  }
}

export default App;
