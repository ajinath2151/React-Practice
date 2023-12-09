import React, { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const MobileVerificaiton = () => {
  const [value, setValue] = useState();
  return (
    <div>
      <form action="">
      <h1>
        Pone number verification return 
        <PhoneInput
          placeholder="Enter phone number"
          value={value}
          onChange={setValue}
        />    
      </h1>
      </form>
    </div>
  );
};

export default MobileVerificaiton;
