import React from "react";

const Invalid = () => {
  const handleInvalid = () => {
    alert("must enter value First name");
  };
  return (
    <div>
      onInvalid Event
      <br />
      <form action="" onSubmit={"submit"}>
        <label For="fName">First Name</label>
        <input
          type="text"
          name=""
          id="fName"
          onInvalid={handleInvalid}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Invalid;
