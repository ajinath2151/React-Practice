import React, { useRef } from 'react'

const UseRefDemo01 = () => {


    let inputRef = useRef(0);

    const handleInput = () => {
        console.warn("onclick called.......")
        //adding value in input on click of button
        inputRef.current.value="1000";

        //removing value in input on click of button
        // inputRef.current.value="";
     
        //got focus on input
        inputRef.current.focus();
        
        //change color
        inputRef.current.style.color ="red"
        inputRef.current.style.backgroundColor ="yellow"
        
        //display
        // inputRef.current.style.display ="none"
        
        

    }
  return (
    <div>
        {/* inputRef variable have full access for modify in below input */}
      <h4><input type="text" name="" id="" ref={inputRef}  /></h4>
      <button onClick={handleInput}>Input Button</button>
    </div>
  )
}

export default UseRefDemo01
