import React, { Component } from 'react'

class Box extends Component {
  render() {
    const { width, height, color } = this.props.boxSpec;
    return (
      <div>
        <div style={{width: `${width}px`, height: `${height}px`, backgroundColor: color}}></div>
        <button onClick={this.props.removeBox}>Delete Me</button>
      </div>
    )
  }
}

export default Box;
