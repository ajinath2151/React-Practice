import React from 'react'

const Focus = () => {
    


    const handleFocus = (event)=> {        
        document.getElementById("focus").style.backgroundColor="red";
        document.getElementById("blur").style.backgroundColor="green";
    }
    const handleBlur = (event)=> {
        document.getElementById("blur").style.backgroundColor="yellow";
        document.getElementById("focus").style.backgroundColor="blue";
    }
  return (
    <div>
        <input type="text" name="" id="focus" onFocus={handleFocus} onBlur={handleBlur}/>
        <input type="text" name="" id="blur" onBlur={handleBlur} onFocus={handleFocus}/>
    </div>
  )
}

export default Focus
