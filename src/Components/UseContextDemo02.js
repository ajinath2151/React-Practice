import React, { createContext, useContext, useState } from "react";

const counterContext = createContext();
const UseContextDemo02 = () => {
  const [counter, setCounter] = useState(100);

  return (
    <counterContext.Provider value={counter}>
      <div>
        <h2>anther example of useContext hook</h2> counter example
        <h2>{`Counter value from first component is : ${counter}`}</h2> 
        <Component2 />
      </div>
    </counterContext.Provider>
  );
};
export default UseContextDemo02;

//2nd component
function Component2 () {
    return (
        <>
            <h2>Component 2</h2>
            <Component3 />
        </>
    )
}
//3nd component
function Component3 () {
    return (
        <>
            <h2>Component 3</h2>
            <Component4 />
        </>
    )
}
//4th component
function Component4 () {
    return (
        <>
            <h2>Component 4</h2>
            <Component6 />
        </>
    )
}
//6th component
function Component6 () {
    const counter = useContext(counterContext);
        return (
        <>
            <h2>Component 6</h2>
        <h2>{`Counter value from 6th component is : ${counter}`}</h2> 
        </>
    )
}