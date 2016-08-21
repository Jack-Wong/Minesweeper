import React from 'react';

class Tile extends React.Component {
  constructor(props) {
    super(props)
  };

  handleClick(event) {
    return (event) => {
      let flagged = event.altkey;
      this.props.update(this.props.tile, flagged);
    }
  };

  render() {
    let display;
    if (this.props.tile.flagged) {
      display = '&#9873;'
    } else if (this.props.tile.explored && this.props.tile.bombed) {
      display = '&#128163;'
    } else if (this.props.tile.explored && this.props.tile.adjacentBombCount() > 0) {
      display = <div>{this.props.tile.adjacentBombCount()}</div>
    } else {
      display = " "
    }

    return (
      <div className ={this.defineClasses()} onClick={this.handleClick()}>
        {display}
      </div>
    );
  };

  defineClasses() {
    let classes = "tile";
    if (this.props.tile.explored) {
      classes += " explored";
    }
    return classes;
  }
}

export default Tile;
