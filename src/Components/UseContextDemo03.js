import React, { createContext, useContext, useState } from 'react'

const UserContext = createContext();

const UseContextDemo03 = () => {

    const [user, setUser] = useState("ajinath");    

  return (
   <UserContext.Provider value={user}>
    <div>
        <h1>{`Hello ${user}`}</h1>
        <Component2 />
    </div>
   </UserContext.Provider>   
  )
}
export default UseContextDemo03

const Component2 = () => {
    return (
        <div>
            <h1>Component 2</h1>
            <Component3 />
        </div>
    )
}
const Component3 = () => {
    return (
        <div>
            <h1>Component 3</h1>
            <Component4 />
        </div>
    )
}
const Component4 = () => {
    return (
        <div>
            <h1>Component 4</h1>
            <Component5 />
        </div>
    )
}
const Component5 = () => {
    return (
        <div>
            <h1>Component 5</h1>
            <Component6 />
        </div>
    )
}
const Component6 = () => {
    return (
        <div>
            <h1>Component 6</h1>
            <Component7 />            

        </div>
    )
}
const Component7 = () => {

    const user = useContext(UserContext);
    return (
        <div>            
            <h1>{`Hello ${user}`} from Component 7 </h1>
        </div>
    )
}
