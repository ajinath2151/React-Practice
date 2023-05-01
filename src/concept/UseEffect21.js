import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'

function useEffect21(props) {

    
    useEffect(()=>{
        // console.warn("use effect called");
        alert("count is : " + props.count);
    },[props.count])
    
  return (
    <>  
        <h3>useEffect2 conditions with use effect</h3> 
        <h3>count props : {props.count}</h3>
        <h3>data props : {props.data}</h3>
       
    </>
  )
}

export default useEffect21
