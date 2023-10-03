import React from 'react'

const KeyDown = () => {

    const handleKeyDown = ()=> {
        alert("you pressed key")
    }
  return (
    <>
        <label htmlFor="firstName">First Name </label>
        <input type="text" name="" id="firstName" onKeyDown={handleKeyDown} />
    </>
  )
}

export default KeyDown
