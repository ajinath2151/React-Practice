import { Button } from '@mui/material'
import React, { useState } from 'react'

const HOCExample01 = () => {
  return (
    <>
    <h3>
      <RedCounter cmp={Counter} />
      <GreenCounter cmp={Counter} />
    </h3>
      
    
    </>
  )
}

function RedCounter(props) {
  return (
    <>
      <p style={{backgroundColor:'red', width:150}}><props.cmp /></p>
    </>
  )
}
function GreenCounter(props) {
  return (
    <>
      <p style={{backgroundColor:'green', width:150}}><props.cmp /></p>
    </>
  )
}

function Counter() {
  const [count, setCount] = useState(0)
  return(
    <>
      <div>
        <h3>{count}</h3>
        <button onClick={()=>{setCount(count+1)}}>Update</button>
      </div>
    </>
  )
}
export default HOCExample01
