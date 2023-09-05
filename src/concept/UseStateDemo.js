import React, { useState } from 'react'

const useStateDemo = () => {

    const [myValue,setMyValue] = useState("ajianth");
    console.log(myValue);

    const handleChange = (event)=> {
        setMyValue(event.target.value)
    }
  return (
    <div>
        <h1><input type='text' value={myValue} placeholder='enter something......'onChange={handleChange}></input></h1>      
        <h2>{myValue}</h2>
    </div>
  )
}
export default useStateDemo
