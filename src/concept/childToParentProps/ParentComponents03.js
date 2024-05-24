import React from 'react'
import ChildComponent03 from './ChildComponent03'

const ParentComponents03 = () => {

    const getData = (fname) => {
        console.log(fname);
    }
  return (
    <div>
      <h1>parent ParentComponents03</h1>
      <ChildComponent03 getData={getData} />
    </div>
  )
}

export default ParentComponents03
