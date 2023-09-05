import React, { useEffect, useState } from 'react'

const UseEffectDemo03 = () => {

    const [increment,setIncrement] = useState(0);
    const [decrement,setDecrement] = useState(0);

    useEffect(()=>{
        console.log("ajinath");
    },[increment]);
    
    const handleIncrement = ()=> {
        setIncrement(increment + 1)        
    }
    const handleDecrement = ()=> {
        setDecrement(decrement -1)             
    }
  return (
    <div>
        <h2>
        <button onClick={handleIncrement}>Increment {increment} </button>
        <button onClick={handleDecrement}> Decrement {decrement}</button>
        </h2>
    </div>
  )
}

export default UseEffectDemo03
