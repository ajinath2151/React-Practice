import { makeStyles, Portal } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme)=>({
    alert: {
      padding:theme.spacing(1),
      margin:theme.spacing(1,0),
      border:'1px solid green',
    },
}));

function PortalDemo() {
  
  const classes = useStyles();
  const [show, setShow] = React.useState(false);
  const container=React.useRef(null);

  // funcitons  
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <>
        <div>          
          <button type='butoon' onClick={handleClick}>
            { show ? ' Unmount Children ': ' Mount Children ' }
          </button>          
          <div className={classes.alert}>
        It looks like I will render here.
        {show ? (
          <Portal container={container.current}>
            <span>But I actually render here!</span>
          </Portal>
        ) : null}
      </div>
          <div className={classes.alert} ref={container}></div>
        </div>      
    </>
  )
}

export default PortalDemo
