import React from 'react'
import '../css styling/myStyle.module.css'
const ModuleStyle = () => {
  return (
    <div>
        <p className='paraStyle'>t is available only for the component which imports it, means any styling you add can never be applied to other components without your permission, and you never need to worry about name conflicts.</p>        
        <h1 className='h1Style'>this is h1</h1>
    </div>
  )
}

export default ModuleStyle
