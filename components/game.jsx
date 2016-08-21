import React from 'react';
import Board from "./board";
import * as Minesweeper from '../Minesweeper';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: new Minesweeper.Board(10, 10)
    }
    this.updateGame = this.updateGame.bind(this);
  }

  updateGame(tile, isFlagged) {
    if (isFlagged) {
      tile.toggleFlag();
    } else {
      tile.explore();
    }
    this.setState({board: this.state.board});
  };

  render() {
    let modal;
    if(this.state.board.won()) {
      modal = "YOU WIN!"
    } else if (this.state.board.lost()) {
      modal = "YOU LOSE!"
    }

    return(
      <div>
        <Board board={this.state.board} update={this.updateGame}/>
        {modal}
      </div>
    );
  };
}

export default Game;
