import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import UseEffect21 from './UseEffect21';
function useEffect2() {

    const [data, setData] = useState(10);
    const [count, setCount] = useState(100);
    // useEffect(()=>{
    //     console.warn("use effect called");
    // },[data])
    // useEffect(()=>{
    //     // console.warn("use effect called");
    //     alert("count is" + count);
    // },[count])
  return (
    <>  
        <h3>useEffect2 conditions with use effect</h3>         
        <UseEffect21 count={count} data={data} />
        <button type="button" onClick={()=>setCount(count+1)}>Button Count</button>        
        <button type="button" onClick={()=>setData(data+1)}>Data Count</button>        
    </>
  )
}

export default useEffect2
