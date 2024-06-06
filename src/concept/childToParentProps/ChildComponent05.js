import { React, useState } from 'react'

const ChildComponent05 = (props) => {

    const [title, setTitle] = useState('');

    const handleClick = (e) => {
        e.preventDefault();        
        props.getData(title);
    };
  return (
    <div>
      <h4>Child Component 05</h4>
        <form action="">
            <input type="text" name="" id="" onChange={(e)=>setTitle(e.target.value)} />
            <button onClick={handleClick}>Click for get Data</button>
        </form>
    </div>
  )
}

export default ChildComponent05
