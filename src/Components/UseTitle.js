import React from "react";
import { useEffect, useState } from "react";

// create custom hook "UseTitle", this is parent hook to provide title for many child
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
