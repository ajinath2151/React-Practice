import React , { useState }from 'react'

const useColorCustomHook = () => {

    
    const [myColor, setMyColor] = useState('green');
    
    const handleClick = () => {        
        setMyColor('red');
    }

    return [myColor, handleClick];
  
}

export default useColorCustomHook
