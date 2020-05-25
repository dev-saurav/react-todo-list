import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <ListItem dense button onClick={toggleTodo.bind(this, todo.id)}>
      <ListItemIcon>
        <Checkbox edge="start" checked={todo.completed} disableRipple />
      </ListItemIcon>
      <ListItemText
        style={
          todo.completed
            ? { textDecoration: "line-through" }
            : { textDecoration: "none" }
        }
        primary={todo.title}
      />
      <ListItemSecondaryAction>
        <IconButton edge="end" onClick={deleteTodo.bind(this, todo.id)}>
          <DeleteIcon color="secondary" />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default TodoItem;
