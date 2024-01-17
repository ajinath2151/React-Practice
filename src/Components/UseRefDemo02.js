import React, { useRef } from 'react'

const UseRefDemo02 = () => {
    
    const myRefVariable = useRef(0);

    const handleClick = ((e)=>{
        e.preventDefault();
        alert("you can see dom modifications");
        myRefVariable.current.style.color="red";
        myRefVariable.current.style.border="5px solid green";
        
    })
    

  return (
    <div>
      <h4> useRef demo example 02 </h4>

    <input type="text" name="" id="" ref={myRefVariable}  />
    <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default UseRefDemo02
