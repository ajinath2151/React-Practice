import React, { useState } from 'react'

const HOCExample03 = () => {
  return (
    <div>
      <RedCounter cmp={Counter} />   
      <GreenCounter cmp={Counter} />   
      <YellowCounter cmp={Counter} />   
    </div>
  )
}

function RedCounter(props){
    return(
        <>
        <p style={{backgroundColor:'red', width:150, height:50}}><props.cmp /></p>
        </>
    )
}
function GreenCounter(props){
    return(
        <>
        <p style={{backgroundColor:'green', width:150, height:50}}><props.cmp /></p>
        </>
    )
}
function YellowCounter(props){
    return(
        <>
        <p style={{backgroundColor:'yellow', width:150, height:50}}><props.cmp /></p>
        </>
    )
}
function Counter(){
    const [value,setValue] = useState(0)
    return (
        <>
        <div>{value}</div>
            <button onClick={()=>{setValue(value+1)}}>Update value</button>
        </>
    )
}
export default HOCExample03
