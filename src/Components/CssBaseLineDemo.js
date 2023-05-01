import { CssBaseline, Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function CssBaseLineDemo() {
  const classes = useStyles();
  return (
    <>
        
        <div className={classes.root}>
        <CssBaseline />
      <Typography variant='h4'>
        we use cass baseline for basic reset, i.e. 
        insert CssBaseline component at the top of the code starting and start your coding...

        CssBaseline is sort of css reset added to the <head /> of your document. If you are familiar with similar approaches like normalize. css which adds some default visual styling to default elements, resets paddings and etc ...
      </Typography>
    </div>
    </>
  )
}

export default CssBaseLineDemo
