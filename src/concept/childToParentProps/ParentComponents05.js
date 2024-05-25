import React from 'react'
import ChildComponent05 from './ChildComponent05'

const ParentComponents05 = () => {

    const getData = (title) => {
        console.log(title);
    }
  return (
    <div>
      <h4>this is parent component 05</h4>
      <ChildComponent05  getData={getData} />
    </div>
  )
}

export default ParentComponents05
