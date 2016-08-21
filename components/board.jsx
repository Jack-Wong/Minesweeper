import React from 'react';
import Tile from "./tile"

class Board extends React.Component {
  constructor(props) {
    super(props)
  };

  render() {
    const rows = this.props.board.grid.map((row, r_idx) => {
      const cols = row.map((col, c_idx) => {
        return <Tile tile={col} update={this.props.update} key={c_idx}/>
      })

      return <div className = "row" key={r_idx}>{cols}</div>
    });

    return(
      <div id = "board">
        {rows}
      </div>
    );
  };
}


export default Board;
