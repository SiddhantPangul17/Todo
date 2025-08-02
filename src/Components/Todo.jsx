import React, { Component } from 'react'
import './Todo.css'

export default class Todo extends Component {
  constructor(){
    super();
    this.state = {
      tasks: [],
      currentTask: ''
    }
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter'){
      this.handleSubmit();
    }
  }

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({
      currentTask: e.target.value
    }); 
  }

  handleSubmit = () => {
    if(this.state.currentTask.trim() === '') return;
    this.setState({
      tasks: [...this.state.tasks, {task: this.state.currentTask, id: Date.now()}],  //Spread operator is used.
      currentTask: ''
    })
  }

  handleDelete = (id) => {
    console.log(id);
    this.setState({
      tasks : this.state.tasks.filter(task => task.id !== id)
    })
  }
  render() {
    return (
      <div>
        <div className='todo-container'>
        <input 
          className='input' 
          type="text" 
          placeholder='Add a task...' 
          value={this.state.currentTask} 
          onChange={this.handleChange}
          onKeyDown={this.handleKeyPress}
        />
        <button className='btn' onClick={this.handleSubmit}>Submit</button>
        </div>
        
          <ul className='task-container'>
          {
            this.state.tasks.map((task,index) => (
              <li key={task.id} className='task'>
                <span className='taskName'>{index+1}. {task.task}</span>
                <button className='btn-del' onClick={() => this.handleDelete(task.id)}>Delete</button>
              </li>
            ))
          }
        </ul>
      
      </div>
    )
  }
}