import React, { Component } from 'react'

import { randSelector } from './helpers';

class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fill: randSelector(this.props.colors),
    }
  }

  swapColorTrigger = () => {
    let newColor;

    do {
      newColor = randSelector(this.props.colors);
    } while ( newColor === this.state.fill);

    this.setState({
      fill: newColor,
    })
  }

  render() {
    const { fill } = this.state;
    return (
      <div className="box" onClick={this.swapColorTrigger} style={{background: fill}}></div>
    )
  }
}

export default Box;
