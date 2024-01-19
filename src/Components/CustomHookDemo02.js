import React, { useState } from 'react'
import useCounter from './useCounter';

const CustomHookDemo02 = () => {

    const [count, increment, decrement] = useCounter();

    return (
    <div>
        <h1>Count is  : {count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default CustomHookDemo02