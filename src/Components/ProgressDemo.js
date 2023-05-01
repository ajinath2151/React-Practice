import { CircularProgress, LinearProgress } from '@material-ui/core'
import React from 'react'

function ProgressDemo() {
  return (
    <div>
      <h3>Progress Demo</h3>
      <div>
        <h6>circular progress</h6>
        <CircularProgress />
        <CircularProgress color='secondary' />                        
      </div>
      <br />
      <div>
        <h6>linear progress</h6>
      <LinearProgress />
      <br />      
        <LinearProgress color='secondary' />
      </div>      
    </div>
  )
}

export default ProgressDemo
