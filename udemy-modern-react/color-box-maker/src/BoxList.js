import React, { Component } from 'react'

import Box from './Box';
import NewBoxForm from './NewBoxForm';

class BoxList extends Component {
  constructor() {
    super();
    this.state = {
      boxes: []
    }
  }

  addBox = boxData => {
    this.setState(state => ({
      boxes: [...state.boxes, boxData]
    }))
  }

  removeBox = id => {
    this.setState({
      boxes: this.state.boxes.filter(box => box.id !== id)
    })
  }

  handleSubmit = () => {
    this.removeBox();
  }

  render() {
    const boxes = this.state.boxes.map(x => (
      <Box
        boxSpec={x}
        id={x.id}
        key={x.id}
        removeBox={() => this.removeBox(x.id)}
      />
    ))

    return (
      <div>
        <NewBoxForm addBox={this.addBox} />
        {boxes}
      </div>
    )
  }
}

export default BoxList;
