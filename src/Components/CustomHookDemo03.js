<<<<<<< HEAD
import React from "react";
=======
import React, { useState } from "react";
>>>>>>> 94339fb4178b3fb0e8600ffd32f6a6b06f00e113
import useColorCustomHook from "./useColorCustomHook";

const CustomHookDemo03 = () => {
  const [myColor, handleClick] = useColorCustomHook();

  return (
    <>
      <div>
<<<<<<< HEAD
        <h1 id="h1" style={{ color: myColor }}>
          third example
        </h1>
=======
        <h1 id="h1" style={{color:myColor}}>third example</h1>
>>>>>>> 94339fb4178b3fb0e8600ffd32f6a6b06f00e113
        <button onClick={handleClick}>Click me</button>
      </div>
    </>
  );
};

export default CustomHookDemo03;
