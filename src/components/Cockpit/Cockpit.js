import React from "react";

import Header from "../Header/Header";
import SearchBar from "../SearchBar/SearchBar";
import TodoList from "../TodoList/TodoList";
import Dialog from '@material-ui/core/Dialog';
import AddItemDialog from '../Dialog/AddItemDialog'

import { Paper, Container } from "@material-ui/core";

const Cockpit = ({ todos, toggleTodo, deleteTodo, searchTodo, addTodo }) => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Container maxWidth="sm">
        <Paper elevation={3}>
          <Header handleClickOpen={handleClickOpen} />
          <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <AddItemDialog handleClose={handleClose} addTodo={addTodo} />
          </Dialog>
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
