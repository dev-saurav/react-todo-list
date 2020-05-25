import React from "react";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  textfieldStyle: {}
});

const SearchBar = ({ searchTodo }) => {
  const classes = useStyles();
  return (
    <div>
      <TextField
        label="Search Todos"
        variant="outlined"
        margin="normal"
        className={classes.textfieldStyle}
        onChange={searchTodo}
        fullWidth
      />
    </div>
  );
};

export default SearchBar;
