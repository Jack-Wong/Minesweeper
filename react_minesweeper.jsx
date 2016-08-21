import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/board';
import Game from './components/game';
import Tile from './components/tile';

class Minesweeper extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
      <Game/>

      </div>
    )
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const root = document.querySelector("#root");
  ReactDOM.render(<Minesweeper/>, root);
});
