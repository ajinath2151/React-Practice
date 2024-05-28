import React from 'react'
import ChildComponent06 from './ChildComponent06'

const ParentComponents06 = () => {

    const getData = (yourName) => {
        console.log(yourName);
    };
  return (
    <div>
      <h4>Parent Components 06</h4>
      <ChildComponent06  getData={getData}/>
    </div>
  )
}

export default ParentComponents06
