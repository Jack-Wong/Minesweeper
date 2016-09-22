import React from 'react';

class Tile extends React.Component {
  constructor(props) {
    super(props)
  };

  handleClick(event) {
    return (event) => {
      let flagged = event.altKey;
      this.props.update(this.props.tile, flagged);
    }
  };

  render() {
    let display;
    if (this.props.tile.flagged) {
      display = '\u2691';
    } else if (this.props.tile.explored && this.props.tile.bombed) {
      display = '\u2622';
    } else if (this.props.tile.explored && this.props.tile.adjacentBombCount() > 0) {
      display = <div>{this.props.tile.adjacentBombCount()}</div>;
    } else {
      display = " ";
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
    if (this.props.tile.flagged) {
      classes += " flagged"
    }
    return classes;
  }
}

export default Tile;
