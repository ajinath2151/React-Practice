import React, { createContext, useContext, useState } from "react";

const  UserContext = createContext(); //variable userContext for import useContext
const UseContextDemo01 = () => {

    const [user, setUser] = useState("ajinath shinde");
  return (
    <UserContext.Provider value={user}>
      <div>
        <h1>{`Hello ${user}`} from component 1</h1>
        <Component2 />
      </div>
    </UserContext.Provider>
  );
};

export default UseContextDemo01;

// second component
function Component2() {
    return (
        <>
            <h1>Component 2</h1>
            <Component3 />
        </> 
    );
}
// third component
function Component3() {
    return (
        <>
            <h1>Component 3</h1>
            <Component4 />
        </>
    );
}
// fourth component
function Component4() {
    return (
        <>
            <h1>Component 4</h1>
            <Component5 />
        </>
    );
}
// fifth component
function Component5() {
 const user = useContext(UserContext);   
    return (
        <>
            <h1>Component 5</h1>
            <h1>{`hello user ${user} , form component 5 `}</h1>
        </>
    );
}