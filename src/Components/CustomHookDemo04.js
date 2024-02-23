import React, { useEffect, useState } from 'react'
import useIncreaseCounter from "./useIncreaseCounter";

const CustomHookDemo04 = () => {

    const [counter, increment, decrement]= useIncreaseCounter();

    return (
    <div>
      <h3>custom hook 4 example</h3>
      <button onClick={increment}>Increase Counter : {counter}</button>
      <button onClick={decrement}>Decrease Counter : {counter}</button>
    </div>
  )
}

export default CustomHookDemo04
