import React from 'react'
import Child from './Child'

const ParentComponents = () => {

    const getData = (data)=> {
        console.log("coming from child.js to parent.js : " + data);
    }
  return (

    <div>
        <h1>parent Components</h1>
        <Child onSubmit={getData} />
    </div>
  )
}

export default ParentComponents

// child to parent data sent also called as "lifting state up"      