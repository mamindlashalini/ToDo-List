import React, { Component } from 'react';
import "./main.css";
export default class CreateTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: '',
    };
  }
  handleChange = (event) => {
    this.setState({ task: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createTask(this.state.task);
    this.setState({ task: '' });
  };
  render() {
    return (
   <div>
        <input type="text" placeholder="Enter task" value={this.state.task} onChange={this.handleChange} autoFocus /> {""}
        <button class="add" type="submit" onClick={this.handleSubmit}>Add</button> {""}
        
     </div>
    );
  }
}