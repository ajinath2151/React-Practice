import React, { useState } from 'react'

const HOCExample02 = () => {
  return (
    <div>
      <OrangeComponent cmp={Counter} />
      <BlackComponent cmp={Counter} />
      <BlueComponent cmp={Counter} />
    </div>
  )
}

function OrangeComponent(props){
    return(
        <>
        <p style={{backgroundColor:'orangered', width:100}}><props.cmp /></p>
        </>
    )
}
function BlackComponent(props){
    return(
        <>
        <p style={{backgroundColor:'black', width:100}}><props.cmp /></p>
        </>
    )
}
function BlueComponent(props){
    return(
        <>
        <p style={{backgroundColor:'blue', width:100}}><props.cmp /></p>
        </>
    )
}

function Counter(){
    const [count,setCount] = useState(0);
    return (
        <>
        <p>{count}</p>
        <button onClick={()=>{setCount(count+1)}}>Update Counter</button>
        </>
    )
}
export default HOCExample02
