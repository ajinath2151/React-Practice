import React from 'react'

const PromiseExample = () => {

    let P = new Promise((resolve, reject) => {
        setTimeout(() => {            
            resolve("promise resolved with value 10");
        }, 3000);
    }
    )
    .then((value)=>{
        console.log(value);
    })
  return (
    <div>
      
    </div>
  )
}

export default PromiseExample
