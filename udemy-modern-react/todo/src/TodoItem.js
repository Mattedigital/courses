import React, { Component } from 'react'

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      title: this.props.taskData.taskTitle
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleEdit = () => {
    this.setState({
      isEditing: !this.state.isEditing
    })
  }

  handleUpdate = event => {
    event.preventDefault();
    this.props.triggerUpdate(this.props.taskData.id, this.state.title);
    this.setState({
      isEditing: false
    })
  }

  render() {
    const { title } = this.state;
    const form = (
      <form onSubmit={this.handleUpdate}>
        <input type="text" value={title} name="title" onChange={this.handleChange}/>
        <button>Save</button>
      </form>
    )
    return (
      <li className="todo-item">
        {
          this.state.isEditing ? form : title
        }
        <button onClick={this.handleEdit}>Edit</button>
        <button onClick={this.props.triggerRemove}>Delete</button>
      </li>
    )
  }
}

export default TodoItem;
