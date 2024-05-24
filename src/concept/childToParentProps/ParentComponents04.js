import React from 'react'
import ChildComponent04 from './ChildComponent04'

const ParentComponents04 = () => {

    const getData = (number) => {
        console.log(number);
    };
  return (
    <div>
        <h4>parent component 4</h4>

        <ChildComponent04 getData={getData} />
    </div>
  )
}

export default ParentComponents04
