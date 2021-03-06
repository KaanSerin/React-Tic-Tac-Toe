import React, { Component } from "react";
import Board from "../components/Board/Board";
import Head from "../components/Head/Head";
import { Provider } from "../Context/Context";

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
    magicBoard: {
      box0: 8,
      box1: 1,
      box2: 6,
      box3: 3,
      box4: 5,
      box5: 7,
      box6: 4,
      box7: 9,
      box8: 2,
    },
    p1LastThreeMoves: [],
    p2LastThreeMoves: [],
    currentPlayer: "X",
    playerWon: null,
    gameOver: false,
    xScore: 0,
    oScore: 0,
  };

  boxClickHandler = (box) => {
    if (!this.state.gameOver) {
      if (this.state.board[box] === null) {
        const newBoard = this.state.board;
        newBoard[box] = this.state.currentPlayer;
        this.evaluateBoard(this.state.currentPlayer, newBoard);
      }
    } else {
      this.clearBoard();
    }
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
      p1LastThreeMoves: [],
      p2LastThreeMoves: [],
      currentPlayer: "X",
      playerWon: null,
      gameOver: false,
    });
  };

  resetScore = () => {
    this.setState({
      xScore: 0,
      oScore: 0,
    });
    this.clearBoard();
  };

  evaluateBoard = (currentPlayer, newBoard) => {
    const newCurrentPlayer = this.state.currentPlayer === "X" ? "O" : "X";

    const winningCombos = [
      ["box0", "box1", "box2"],
      ["box3", "box4", "box5"],
      ["box6", "box7", "box8"],
      ["box0", "box3", "box6"],
      ["box1", "box4", "box7"],
      ["box2", "box5", "box8"],
      ["box0", "box4", "box8"],
      ["box2", "box4", "box6"],
    ];

    winningCombos.forEach((combo) => {
      // If there is a winning combo, set the game to be over and declare the winner
      if (
        (newBoard[combo[0]] !== null) &
          (newBoard[combo[0]] === newBoard[combo[1]]) &&
        newBoard[combo[0]] === newBoard[combo[2]]
      ) {
        const newPlayerWon = newBoard[combo[0]];
        if (newPlayerWon === "X")
          this.setState((prevState, props) => ({
            xScore: prevState.xScore + 1,
          }));
        else
          this.setState((prevState, props) => ({
            oScore: prevState.oScore + 1,
          }));
        this.setState({ gameOver: true, playerWon: newPlayerWon });
      }
    });

    // In any case, set the new board and player state
    this.setState({
      currentPlayer: newCurrentPlayer,
      board: newBoard,
    });
  };

  render() {
    return (
      <div className="App">
        <Provider value={this.state}>
          <Head
            gameOver={this.state.gameOver}
            turn={this.state.currentPlayer}
            clearBoard={this.clearBoard}
            playerWon={this.state.playerWon}
            resetScore={this.resetScore}
          />

          <Board board={this.state.board} clickHandler={this.boxClickHandler} />
        </Provider>
      </div>
    );
  }
}

export default App;
