import React, { Component } from 'react';
import shortid from 'shortid';

class TodoForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      taskTitle: ''
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    const newTask = {...this.state, id: shortid.generate()}
    this.props.addTask(newTask);
    this.setState({
      taskTitle: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="addTodo">New Todo</label>
        <input
          id="addTodo"
          name="taskTitle"
          placeholder="enter your todo here"
          value={this.state.taskTitle}
          onChange={this.handleChange}
        />
        <button>Add Todo</button>
      </form>
    )
  }
}

export default TodoForm;
