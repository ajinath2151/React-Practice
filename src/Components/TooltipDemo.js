import { Fab, IconButton, makeStyles, Tooltip } from '@material-ui/core'
import { Delete, Add } from '@material-ui/icons'
import React from 'react'

const useStyle = makeStyles((theme)=>({
  fab: {
    margin: theme.spacing(2),
  },
  }))

function TooltipDemo() {

  const classes = useStyle();
  return (
    <>
        <h3>tooltip text</h3>   
        <div>
            <Tooltip className={classes.tooltipSize} title="Delete" >
                <IconButton aria-label='delete'>
                    <Delete></Delete>                    
                </IconButton>
            </Tooltip>
            <Tooltip title="Add" arie-label="add">
              <Fab color="primary" className={classes.fab}>
                <Add></Add>
              </Fab>
            </Tooltip>
        </div>
    </>
  )
}

export default TooltipDemo
