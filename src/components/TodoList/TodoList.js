import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "../TodoItem/TodoItem";
const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  }
}));

export default function TodoList({ todos, toggleTodo, deleteTodo }) {
  const classes = useStyles();
  const todoList = todos.map(todo => (
    <ListItem todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
  ));
  return <List className={classes.root}>{todoList}</List>;
}
