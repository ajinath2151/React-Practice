import React, { useState } from 'react'

const useIncrementCustomHook = () => {

    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(count + 1);        
    }
    const decrease = () => {
        setCount(count - 1);        
    }

    return [count, increase, decrease];
    
  return (
    <div>
      
    </div>
  )
}

export default useIncrementCustomHook
