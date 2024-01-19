import React from "react";
import { useEffect, useState } from "react";

// create custom hook "UseTitle", this is child hook to write logic for custom hook 
const UseTitle = (props) => {

  useEffect(() => {
    document.title = props + " time hits";
  });

  return (
    <div>

    </div>
  );
};

export default UseTitle;
