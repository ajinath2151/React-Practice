import React, { useState } from 'react'

const ChangeInInput = () => {

    const [name,setName] = useState("ajay");

    const handleChange = (event)=> {
        setName(event.target.value)
    }
    console.log(name);
  return (
    <div>
        <br />
        <label For="firstName">First Name</label>
      &nbsp;&nbsp;<input type="text" name="" id="firstName" onChange={handleChange} on value={name} /> <br /> <br />
      Output Textbox &nbsp;&nbsp;
      <input type="text" name="" id="" value={name} />      
      
    </div>
  )
}

export default ChangeInInput
