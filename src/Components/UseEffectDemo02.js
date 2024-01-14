

import React, { useEffect, useState } from 'react'

//myCounter example for useEffect which is update on every second
const UseEffectDemo02 = () => {

  var [myCounter, SetMyCounter] = useState(0);

  useEffect(()=>{
    setTimeout(() => {
      SetMyCounter((myCounter) => myCounter + 1);
      // console.log(myCounter);
    }, 1000);
  }) // add [] empty add inside this line },[]) for stop rerendering

  return (
    <div>
      <h1>this is use effect {myCounter}</h1>            
    </div>
  )
}

export default UseEffectDemo02
