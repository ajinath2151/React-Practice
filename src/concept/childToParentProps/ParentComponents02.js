import React from 'react'
import Child02 from './Child02'

const ParentComponents02 = () => {

    const getData = (data)=>{
        console.log(data);
    }
  return (
    <div>
      <Child02 getData={getData} />
    </div>
  )
}

export default ParentComponents02
