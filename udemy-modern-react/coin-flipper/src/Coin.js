import React, { Component } from 'react'

export default class Coin extends Component {
  render() {
    const {side, imgSrc} = this.props.info;
    return (
      <div>
        <img src={imgSrc} alt={side} />
      </div>
    )
  }
}
