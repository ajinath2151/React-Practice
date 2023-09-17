import React, { useState } from 'react'

const Child = (props) => {
    const [name, setName] = useState("");


    const handleChange = (e)=> {
        setName(e.target.value);
    }
    const handleSubmit = (e)=> {
        e.preventDefault();
        props.onSubmit(name)
    }
  return (
    <div>
        <h1>child Components</h1>
        <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={handleChange} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Child
