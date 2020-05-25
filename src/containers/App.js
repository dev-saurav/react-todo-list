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
      {
        id: "dfaffa",
        title: "My first todo",
        completed: true,
        priority: priority.high,
        createdOn: new Date()
      },
      {
        id: "sffsfs",
        title: "My second todo",
        completed: false,
        priority: priority.high,
        createdOn: new Date()
      },
      {
        id: "dfdfdfd",
        title: "My third todo",
        completed: false,
        priority: priority.high,
        createdOn: new Date()
      },
      {
        id: "dfawererfa",
        title: "My fourth todo",
        completed: false,
        priority: priority.high,
        createdOn: new Date()
      }
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
        />
      </div>
    );
  }
}

export default App;
