import React from 'react'

const ChildProps1 = (props) => {
  return (
    <div>
      chile props 1
      {/* fname is props got from ParentProps1 Components */}
      <h1>name is  : { props.fname }</h1>
    </div>
  )
}

export default ChildProps1
