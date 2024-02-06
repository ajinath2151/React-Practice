import React from 'react';
import { useEffect ,useState} from "react";

<<<<<<< HEAD
import useTitleCustomHook from "./UseTitle";
// this is child hook for use useTitle hook
=======
import useTitleCustomHook from "./useTitle";
// this is parent hook of use useTitle hook
>>>>>>> 94339fb4178b3fb0e8600ffd32f6a6b06f00e113
const CustomHookDemo01 = () => {

  const [count, setCount] = useState(0);
  // used custom hook "useTitleCustomHook"  
  useTitleCustomHook(count)
  
  return <div>
    <h1>custom hook</h1>
    <button onClick={()=>setCount(count + 1)}>click me and check title</button>
  </div>;
};

export default CustomHookDemo01;
