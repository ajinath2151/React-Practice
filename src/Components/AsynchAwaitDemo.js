import React from 'react'

const AsynchAwaitDemo = () => {

    
    async function getData() {
        let handlePromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                console.warn("b");
                resolve("all done");
            }, 2000);
        })
        // for multiple promises
        // let handlePromise2 = new Promise((resolve, reject) => {
        //     setTimeout(() => {
        //         resolve("all done 2");
        //     }, 2000);
        // })

        // .then method not part of this example only for understand method before async await
        // handlePromise.then((value)=>{
            //     console.warn(value);
            // })
            console.warn("a");
            let res = await handlePromise;
            console.warn(res);
            console.warn("c");
            


        //print multiple at a time
        // console.warn(res,res2);
        
    }
    getData();

  return (
    <div>
        <h2>async await = async apply to function and await will till to execute/fetch full data or function like synchronous and then process next means work ay synchronous (step by step) using async await </h2>
    </div>
  )
}
export default AsynchAwaitDemo
