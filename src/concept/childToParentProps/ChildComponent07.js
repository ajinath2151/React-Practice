import { React, useState } from 'react'

const ChildComponent07 = (props) => {

    const [title, setTitle] = useState("");

    const handleClick = (e) =>{
        e.preventDefault();
        props.getData(title);
    };
  return (
    <div>
      <h4>Child Component 7</h4>
      <form action="" method="post">
        <h4><input type="text" name="" id="" value={title} placeholder={"enter title here....."} onChange={(e)=>setTitle(e.target.value)}/>
        <button onClick={handleClick}>Click to see value</button>
        </h4>
      </form>
    </div>
  )
}

export default ChildComponent07
