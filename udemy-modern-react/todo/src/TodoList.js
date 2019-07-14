import React, { Component } from 'react'

import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      tasks: []
    }
  }

  addTask = taskData => {
    this.setState(state => ({
      tasks: [...state.tasks, taskData],
    }))
  }

  removeTask = id => {
    this.setState({
      tasks: this.state.tasks.filter(task => task.id !== id)
    })
  }

  updateTask = (id, updatedTaskTitle) => {
    const updatedTasks = this.state.tasks.map(task => {
      if (task.id === id) {
        return {...task, taskTitle: updatedTaskTitle}
      }
      return task;
    })

    this.setState({
      tasks: updatedTasks
    })
  }

  render() {
    const tasks = this.state.tasks.map(task => {
      return <TodoItem
                key={task.id}
                taskData={task}
                triggerRemove={() => this.removeTask(task.id)}
                triggerUpdate={this.updateTask}
              />
    })

    return (
      <div>
        <ul>
          {tasks}
        </ul>
        <TodoForm addTask={this.addTask} />
      </div>
    )
  }
}

export default TodoList;
