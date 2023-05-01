import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import withWidth from '@material-ui/core/withWidth';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    flex: '1 0 auto',
    margin: theme.spacing(1),
  },
}));

function HiddenDemo(props) {
  const classes = useStyles();
  const { width } = props;

  return (
   <>
    <Grid container spacing={2} xs={12} item>
      <Grid lg={3} item sm={6} xs={12}> <h1 style={{backgroundColor:'green'}}>Block 1</h1></Grid>
      <Grid lg={3} item sm={6} xs={12}> <h1 style={{backgroundColor:'green'}}>Block 2</h1></Grid>
      {/* hidden column 3 for xs and md screen */}
      <Hidden only={['xs','md']}> <h1 style={{backgroundColor:'green', flex:'1'}}>Block 3</h1></Hidden>
      <Grid lg={3} item sm={6} xs={12}> <h1 style={{backgroundColor:'green'}}>Block 4</h1></Grid>
    </Grid>
   </>     
  );
} 
export default HiddenDemo
