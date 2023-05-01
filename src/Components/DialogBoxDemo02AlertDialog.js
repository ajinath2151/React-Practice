import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import React from "react";
import { useState } from "react";

function DialogBoxDemo02AlertDialog() {

  const [open, setOpen] = useState(false);


  // funcitons
  const handleClickOpen = ()=> {
    setOpen(true);
  }
  const handleClose = ()=> {
    setOpen(false);
  }
  

  return (
    <>
      <div>
        <h3>Alert Dialog Box</h3>
        <Button onClick={handleClickOpen} variant="outlined" color="primary">
          Open Alert Dialog
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"use google's location services"}
          </DialogTitle>
          <DialogContent>s
            <DialogContentText id="alert dialog description">
              Let Google help apps determine location. This means sending
              anonymous location data to Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Discard
            </Button>
            <Button onClick={handleClose} color="primary" autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}

export default DialogBoxDemo02AlertDialog;
