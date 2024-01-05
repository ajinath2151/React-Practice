import React, { useState } from 'react'

const Child02 = (props) => {

    const [name,setName] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        props.getData(name)
    }
  return (
    <div>
      <form onSubmit={handleSubmit} action="">
        <h1>
        <input type="text" name="" value={name} id="" onChange={(e)=>{setName(e.target.value)}} />
        <button>Submit</button>
        </h1>
            
      </form>
    </div>
  )
}

export default Child02
