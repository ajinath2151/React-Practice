import { makeStyles, Paper } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme)=>({
    root: {
        display:'flex',
        flexWrap:'wrap',
        '& > *' : {
            width:theme.spacing(16),
            height:theme.spacing(20),   
            margin:theme.spacing(1),
            backgroundColor:"#afa5a5",
        }        
    },
    root2: {
        display:'flex',
        '& > * ': {
            width:theme.spacing(16),
            height:theme.spacing(20),
            margin:theme.spacing(1),
        }
    },
}));

function PaperDemo() {

const classes = useStyles();

  return (
    <>
        <h3>Paper Demo</h3>
        <div className={classes.root}>
            <Paper elevation={2} />                
            <Paper />
            <Paper elevation={4} />            
        </div>
        <div className={classes.root2}>
        <Paper variant="outlined" />
        <Paper variant="outlined" square />
        </div>
    </>
  )
}

export default PaperDemo