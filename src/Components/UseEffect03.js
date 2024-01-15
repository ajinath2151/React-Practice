import React, { useEffect, useState } from 'react'

const UseEffect03 = () => {

  const [data, setData] = useState(0);
  const [counter, setCounter] = useState(0);

  
  useEffect(()=>{
    console.log("use effect called.....");
  },[data]) // it it will only call on data state update
  return (
    <div>
      <button onClick={()=>setData((data)=> data + 1)}>Data : {data}</button>
      
      <button onClick={()=>setCounter((counter)=> counter + 1)}>Data : {counter}</button>
      
    </div>
  )
}

export default UseEffect03

