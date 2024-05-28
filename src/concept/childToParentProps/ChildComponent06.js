import { React, useState } from 'react'

const ChildComponent06 = (props) => {

    const [yourName, setYourName] = useState('');

    const handleClick = (e) => {
        e.preventDefault();
        props.getData(yourName);
    }
  return (
    <div>
      <h4>child Component 06</h4>
      <form action="">
        <h2>
            <input type="text" name="" id="" value={yourName} placeholder="enter name" onChange={(e)=>setYourName(e.target.value)}/>
            <button onClick={handleClick}>Click for see updated name</button>
        </h2>
      </form>
    </div>
  )
}

export default ChildComponent06
