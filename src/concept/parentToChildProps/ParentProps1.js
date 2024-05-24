import React from 'react'
import ChildProps1 from './ChildProps1'

const ParentProps1 = () => {
  return (
    <div>
      parent props 1
      {/* fname is props sending to ChildProps1 Components */}
      <ChildProps1 fname={"ajinath"} /> 
    </div>
  )
}

export default ParentProps1
