import React from 'react'

const Copy = () => {

    const handleOnCopy = ()=> {
        alert("text copied..");
        console.log("text copied..");
    }
    
    const handleOnCut = ()=> {
        alert("text cut successfully..");
        console.log("text cut successfully..");
    }
    const handlePast = ()=> {
      alert("text past")
      console.log("text past")
    }
  return (
    <div>
        {/* copy text */}
      <h3> onCopy Event </h3>
       <p onCopy={handleOnCopy}>
        copy this text
       </p>
        
        {/* cut text */}
      <h3> onCut Event </h3>
       <p onCut={handleOnCut}>
        cut/copy this text can ue (ctrl + x to) cut text
       </p>
       past here<input type="text" name="" id="" onPaste={handlePast} />
    </div>
  )
}

export default Copy
