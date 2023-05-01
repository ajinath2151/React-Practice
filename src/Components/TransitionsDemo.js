import { Fade, FormControlLabel, makeStyles, Paper, Switch } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  root: {
    height: 180,
  },
  container: {
    display: 'flex',
  },
  paper: {
    margin: theme.spacing(1),
  },
  svg: {
    width: 100,
    height: 100,
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1,
  },
}));


export default function TransitionsDemo() {

  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);

    // function
  const handleChange = ()=> {
    // setChecked((prev)=>!prev)
    setChecked((prev) => !prev);
  };
  return (
    <>
    
    <div className={classes.root}>
      <FormControlLabel
      control={<Switch checked={checked} onChange={handleChange}></Switch>}
      label="Show"
      />
      <div className={classes.container}>
        <Fade in={checked}>
        <Paper elevation={4} className={classes.paper}>
        <svg className={classes.svg}>
        <polygon points='0,100,50,00, 100,100' className={classes.polygon} />
        </svg>
        </Paper>
        </Fade>
      </div>
    </div>
              
    </>    
  )
}
