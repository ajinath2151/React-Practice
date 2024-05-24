import {React, useState} from 'react'

const ChildComponent04 = (props) => {

    const [number, setNumber] = useState(0);

    const handleClick = (e) =>{
        e.preventDefault();
        props.getData(number);
    }
  return (
    <div>
        
        <h4>Child Component 4</h4>
        
        <form action="">            
            <input type="text" name="" id="" value={number} onChange={(e)=>{setNumber(e.target.value)}} />
            <button onClick={handleClick}>show Number</button>
        </form>
    </div>
  )
}

export default ChildComponent04
