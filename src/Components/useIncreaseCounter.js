// this file is used in CustomHookDemo04.js
import React, { useEffect, useState } from 'react'
const useIncreaseCounter = () => {
    const [counter, setCounter] = useState(0)

    const increment = () => {
        setCounter(counter + 1);
    }
    const decrement = () => {
        setCounter(counter - 1);
    }
    return [ counter ,increment, decrement ]
  return (
    <div>
      
    </div>
  )
}

export default useIncreaseCounter
