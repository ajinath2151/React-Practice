import React from 'react'
import ChildComponent07 from './ChildComponent07'

const ParentComponents07 = () => {

    const getData = (title) =>{
        console.log(title);
    }
  return (
    <div>
        <h4>Parent component 7</h4>      
        <ChildComponent07 getData={getData} />
    </div>
  )
}

export default ParentComponents07
