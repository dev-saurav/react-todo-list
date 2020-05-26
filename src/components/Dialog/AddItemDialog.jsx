import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function AddItemDialog({ handleClose, addTodo }) {
  const [text, setText] = React.useState("");
  const handleTextChange = (event) => {
    setText(event.target.value);
  };
  const handleAddText = () => {
    addTodo(text);
    handleClose();
  };
  return (
    <React.Fragment>
      <DialogTitle id='form-dialog-title'>Add Item</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin='dense'
          id='name'
          label='Add Item'
          fullWidth
          onChange={handleTextChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color='primary'>
          Cancel
        </Button>
        <Button onClick={handleAddText} color='secondary'>
          Add
        </Button>
      </DialogActions>
    </React.Fragment>
  );
}
