import { Avatar, Chip, makeStyles } from "@material-ui/core";
import { Done, Face } from "@material-ui/icons";
import React from "react";
import ajImge from "./images/ajianth.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      fontSize: 20,
    },
  },
}));

function ChipDemo() {
  const classes = useStyles();

  // functions
  const handleClick = () => {
    alert("you clicked on Chip");
  };
  const handleDelete = () => {
    alert("you clicked on delete icon");
  };
  return (
    <>
      <h3>Chip Demo</h3>
      <div className={classes.root}>
        <Chip label="basic" variant="outlined"></Chip>
        <Chip label="disable" disabled></Chip>
        <Chip
          avatar={<Avatar>M</Avatar>}
          label="clickable"
          onClick={handleClick}
        ></Chip>
        <Chip
          variant="outlined"
          avatar={<Avatar alt="ajianth" src={ajImge}></Avatar>}
          label="deletable"
          onDelete={handleDelete}
        ></Chip>
        <Chip
          icon={<Face />}
          label="Clickable deletable"
          onClick={handleClick}
          onDelete={handleDelete}
        />
        <Chip
          label="Custom delete icon"
          onClick={handleClick}
          onDelete={handleDelete}
          deleteIcon={<Done />}
        />
        <Chip
          label="clickable link"
          href="https://v4.mui.com/components/chips/#chip"
          component="a"
          clickable
        >            
        </Chip>
        <Chip
        label="Custom delete icon"
        onClick={handleClick}
        onDelete={handleDelete}
        deleteIcon={<Done />}
      />
      <Chip label="Clickable Link" component="a" href="#chip" clickable />
      <Chip
        avatar={<Avatar>M</Avatar>}
        label="Primary clickable"
        clickable
        color="primary"
        onDelete={handleDelete}
        deleteIcon={<Done />}
      />
      <Chip
        icon={<Face />}
        label="Primary clickable"
        clickable
        color="primary"
        onDelete={handleDelete}
        deleteIcon={<Done />}
      />
      <Chip label="Deletable primary" onDelete={handleDelete} color="primary" />
      <Chip
        icon={<Face />}
        label="Deletable secondary"
        onDelete={handleDelete}
        color="secondary"
      />
      </div>
    </>
  );
}

export default ChipDemo;
