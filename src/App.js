import React, { Component } from 'react';
import "./App.css"

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTodo: '',
    };
  }

  handleInputChange = (e) => {
    this.setState({ newTodo: e.target.value });
  };

  handleAddTodo = () => {
    if (this.state.newTodo.trim() !== '') {
      this.setState((prevState) => ({
        todos: [...prevState.todos, this.state.newTodo],
        newTodo: '',
      }));
    }
  };

  handleEditTodo = (index) => {
    const editedTodo = prompt('Edit Todo:', this.state.todos[index]);
    if (editedTodo !== null) {
      const newTodos = [...this.state.todos];
      newTodos[index] = editedTodo;
      this.setState({ todos: newTodos });
    }
  };

  handleDeleteTodo = (index) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this todo?');
    if (confirmDelete) {
      const newTodos = [...this.state.todos];
      newTodos.splice(index, 1);
      this.setState({ todos: newTodos });
    }
  };

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <input
          type="text"
          value={this.state.newTodo}
          onChange={this.handleInputChange}
          placeholder="Add new todo"
        />
        <button onClick={this.handleAddTodo}>Add</button>
        <ul>
          {this.state.todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <div className='btn'>
              <button onClick={() => this.handleEditTodo(index)}>Edit</button>
              <button onClick={() => this.handleDeleteTodo(index)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

 export default TodoList;