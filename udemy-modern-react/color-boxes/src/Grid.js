import React, { Component } from 'react';
import Box from './Box';

import './Grid.css';

class Grid extends Component {
  static defaultProps = {
    numBoxes: 10,
    colors: [
      "#EE4266",
      "#2A1E5C",
      "#9BC1BC",
      "#E6EBE0",
      "#0A0F0D",
      "#ff5050",
      "#F0F0F0",
      "#808080",
      "#474747",
      "#AEDAE9"
    ]
  }
  render() {
    const boxes = Array.from({ length: this.props.numBoxes }).map((x, index) => (
      <Box colors={this.props.colors} key={index}/>
    ))
    return (
      <div className="grid">
        {boxes}
      </div>
    )
  }
}

export default Grid;
