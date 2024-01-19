import React from "react";
import useColorCustomHook from "./useColorCustomHook";

const CustomHookDemo03 = () => {
  const [myColor, handleClick] = useColorCustomHook();

  return (
    <>
      <div>
        <h1 id="h1" style={{ color: myColor }}>
          third example
        </h1>
        <button onClick={handleClick}>Click me</button>
      </div>
    </>
  );
};

export default CustomHookDemo03;
