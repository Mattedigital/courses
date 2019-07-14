import React, { Component } from 'react'
import shortid from 'shortid';

class NewBoxForm extends Component {
  constructor() {
    super();
    this.state = {
      width: '',
      height: '',
      color: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    const newBox = { ...this.state, id: shortid.generate()}
    this.props.addBox(newBox);
    this.setState({
      width: '',
      height: '',
      color: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='boxWidth'>Width:</label>
        <input
          id="boxWidth"
          name="width"
          type="text"
          placeholder="width"
          value={this.state.width}
          onChange={this.handleChange}
        />
        <label htmlFor='boxHeight'>Height:</label>
        <input
          id="boxHeight"
          name="height"
          type="text"
          placeholder="height"
          value={this.state.height}
          onChange={this.handleChange}
        />
        <label htmlFor='boxColor'>Color:</label>
        <input
          id="boxColor"
          name="color"
          type="text"
          placeholder="color"
          value={this.state.color}
          onChange={this.handleChange}
        />
        <button>Add Box</button>
      </form>
    )
  }
}

export default NewBoxForm;
