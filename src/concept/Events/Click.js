import React from "react";


const Click = () => {
    
    const handleClick= (e)=> {
        alert("you clicked on button")
    }    
    const handledbClickClick= (e)=> {
        alert("double clicked")
    }    
  return (
    <>
    <br />
      <button type="button" className="btn btn-secondary" onClick={handleClick}>
        click me
      </button>      &nbsp;
      <button type="button" className="btn btn-success" onDoubleClick={handledbClickClick}>
        Double click me
      </button>      
    </>
  );
};

export default Click;
