import React from 'react'

const PromiseDemo = () => {

    let P1 = new Promise((resolve, reject)=>{
        setTimeout(() => {
            // resolve(20);            
            reject(new Error(" error in promise p1"))
        }, 2000)        
    })
    .then((value)=>{
        console.log("promise is resolve with value : " + value);
    })
  return (
    <div>
      
    </div>
  )
}

export default PromiseDemo
