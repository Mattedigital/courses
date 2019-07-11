import React, { Component } from 'react'
import Coin from './Coin'
import { choice } from './helpers'

import './CoinFlipper.css';

export default class CoinFlipper extends Component {
  static defaultProps = {
    coins: [
      { side: 'heads', imgSrc: "https://tinyurl.com/react-coin-heads-jpg"},
      { side: 'tails', imgSrc: "https://tinyurl.com/react-coin-tails-jpg"}
    ]
  }
  constructor (props) {
    super(props);
    this.state = {
      flipCount: 0,
      heads: 0,
      tails: 0,
      currCoin: null
    }
  }

  flip = () => {
    const newCoin = choice(this.props.coins);
    this.setState(prevState => {
      return {
        ...prevState,
        currCoin: newCoin,
        flipCount: prevState.flipCount + 1,
        heads: prevState.heads + (newCoin.side === 'heads' ? 1 : 0),
        tails: prevState.tails + (newCoin.side === 'tails' ? 1 : 0)
      }
    });
  }

  render() {
    const {flipCount, heads, tails} = this.state;
    return (
      <div>
        {this.state.currCoin && <Coin info={this.state.currCoin} />}
        <p>Out of {flipCount} flips, there have been {heads} heads and {tails} tails.</p>
        <button onClick={this.flip}>Flip Me!</button>
      </div>
    )
  }
}
