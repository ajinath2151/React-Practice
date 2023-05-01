//UseEffect
import React, { useEffect } from 'react'
import { useState } from 'react';

function UseEffectDemo() {

  const [count, setCount] = useState(0);
  useEffect(()=>{

    console.warn("use effect"); // call use effect means like call componentDidMount() method;
  },[]);

    return (
    <>
        <h3>UseEffect demo : {count}</h3>        
        <button onClick={()=>setCount(count+1)}>update counter</button>
    </>
  )
}

export default UseEffectDemo
