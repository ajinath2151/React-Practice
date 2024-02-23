import React from 'react'
import useIncrementCustomHook from "./useIncrementCustomHook";

const CustomHookDemo05 = () => {

    const [count, increase, decrease] = useIncrementCustomHook();
  return (
    <div>
      <h2>example 5</h2>
    <h2>  {count} <br />
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      </h2>
    </div>

  )
}

export default CustomHookDemo05
