import React, { Component } from "react";

import Cockpit from "../components/Cockpit/Cockpit";

const priority = {
  high: 1,
  medium: 2,
  low: 3
};

class App extends Component {
  state = {
    todos: [
    ],
    searchString: ""
  };
  toggleTodo = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };
  deleteTodo = id => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  };
  searchTodo = event => {
    this.setState({
      searchString: event.target.value
    });
  };
  addTodo = item => {
    let todos = [...this.state.todos]
    const todo = {
      id: (new Date()).toString(),
      title: item,
      completed: false,
      priority: priority.low,
      createdOn: new Date()
    }
    todos.unshift(todo);
    this.setState({
      todos: todos
    })
  }
  render() {
    let filteredList = this.state.todos.filter(todo =>
      todo.title.toLowerCase().includes(this.state.searchString.toLowerCase())
    );
    return (
      <div className="App">
        <Cockpit
          todos={filteredList}
          toggleTodo={this.toggleTodo}
          deleteTodo={this.deleteTodo}
          searchTodo={this.searchTodo}
          addTodo={this.addTodo}
        />
      </div>
    );
  }
}

export default App;
