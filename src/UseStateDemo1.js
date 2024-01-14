import React, { useState } from 'react'

const UseStateDemo1 = () => {

    const [color, setColor] = useState('red');

    const handleColor = (e) => {
        console.log(e.target.value);
        setColor(e.target.value);
    }
  return (    
    <div>

      <button className="blue" value="blue" onClick={handleColor}>Blue</button>
      <button className="green" value="green" onClick={handleColor}>Green</button>
      <button className="orangered" value="orangered" onClick={handleColor}>orangered</button>
      <h1>this is the {color} color </h1>      
    </div>
  )
}

export default UseStateDemo1
