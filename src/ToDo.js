import React, { Component } from 'react';
import Task from "./Task"

class ToDo extends Component {

  state = {tasks: ["🍅", "🥕", "🥔", "🌽"]}

  updateToDoList = idx => {
    /***  
      State shouldn't be modified directly and splice 
      modifies the orginal array it's called on. 
      Therefore we're using the spread operator to copy the array first. ;)
    ***/
    const taskListCopy = [...this.state.tasks]
    taskListCopy.splice(idx, 1)
    this.setState({tasks: taskListCopy})
  }

  render() {
    return (
      <div>
        {this.state.tasks.map((aTask, index) => 
          <Task index={index.toString()} deleteTask={this.updateToDoList} taskName={aTask} />
        )}
      </div>
    )
  }
}

export default ToDo;
