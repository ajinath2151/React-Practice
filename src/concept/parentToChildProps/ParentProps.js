import React from 'react'
import ChildProps from './ChildProps'

const ParentProps = () => {
  return (
    <div>
      <h1> parent Components</h1>
      <ChildProps  country="this is my india" />
    </div>
  )
}

export default ParentProps
