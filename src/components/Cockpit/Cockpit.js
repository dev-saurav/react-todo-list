import React from "react";

import Header from "../Header/Header";
import SearchBar from "../SearchBar/SearchBar";
import TodoList from "../TodoList/TodoList";

import { Paper, Container } from "@material-ui/core";

const Cockpit = ({ todos, toggleTodo, deleteTodo, searchTodo }) => {
  return (
    <div>
      <Container maxWidth="sm">
        <Paper elevation={3}>
          <Header />
          <Container>
            <SearchBar searchTodo={searchTodo} />
          </Container>
          <Container>
            <TodoList
              todos={todos}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          </Container>
        </Paper>
      </Container>
    </div>
  );
};

export default Cockpit;
