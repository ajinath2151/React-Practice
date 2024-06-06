import React from 'react'
import ChildComponent05 from './ChildComponent05'

const ParentComponents05 = () => {

    const getData = (title) => {
        console.log(title);
    }
  return (
    <div>
      <h4>Parent Components 05</h4>
      <ChildComponent05 getData={getData} />              
    </div>
  )
}

export default ParentComponents05
