import { React, useState } from 'react'

const ChildComponent05 = (props) => {

    const [title, setTitle] =  useState('');
    const handleClick = (e) => {
        e.preventDefault();
        props.getData(title);
    }
  return (
    <div>
      <h4>this is child component 05</h4>
      <form action="">
        <input type="text" name="" id="" placeholder="enter value to sent" value={title} onChange={(e)=>setTitle(e.target.value)} />
        <button type="button" onClick={handleClick}>Show Data</button>
      </form>
    </div>
  )
}

export default ChildComponent05
