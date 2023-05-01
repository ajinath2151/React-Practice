import { makeStyles, Modal } from '@material-ui/core'
import React from 'react'

function rand() {
  return Math.round(Math.random() * 20) - 10;
}
function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform:`translate(-${top}%, -${left}%)`,
  };
}
const usestyles = makeStyles((theme)=>({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function ModalDemo() {
    
    const classes = usestyles();
    const [open, setOpen] = React.useState(false);
    const [modalStyle] = React.useState(getModalStyle);

    const handleOpen = ()=> {
      setOpen(true);
    }
    const handleClose = ()=> {
      setOpen(false);
    }
    const body = (
      <div style={modalStyle} className={classes.paper}>
        <h2 id='simple-modal-title'> Text in a modal </h2>
        <p id='simple-modal-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia maxime accusamus et maiores nemo quam pariatur enim nam deleniti mollitia.</p>
        <ModalDemo />
      </div>
    );
  return (
    <>
    <h3>Modal Demo</h3>
        <div>
            <button type='button' onClick={handleOpen}>
                Open Modal
            </button>
            <Modal
            open={open}
            onClose={handleClose}
            aria-labbeledby='simple-modal-title'
            aria-describedby='simple-modal-description'
            >
              {body}
            </Modal>
        </div> 
    </>
  );
}

export default ModalDemo
