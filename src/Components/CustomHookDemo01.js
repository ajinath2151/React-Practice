import React from 'react';
import { useEffect ,useState} from "react";

import useTitleCustomHook from "./useTitle";
// this is child hook for use useTitle hook
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
