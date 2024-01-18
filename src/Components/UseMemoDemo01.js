
//when we click on button add todo , component not re-render
import React, { useMemo, useState } from "react";

const UseMemoDemo01 = () => {
  const [count, setCount] = useState(0);
  const [todo, setTodo] = useState([]);

  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    setTodo((t) => [...t, "New Todo"]);
  };

  return (
    <>
      <div>
        <div>
          <h1>example to demonstrate use of useMemo hook</h1>
          <h2>My Todo</h2>
          {todo.map((td, index) => {
            return <p key={index}>{td}</p>;
          })}
          <button onClick={addTodo}>Add Todo</button>
        </div>
        <hr />
        <div>
          <h2>
            {" "}
            Count : {count} <button onClick={increment}>+</button>{" "}
          </h2>

          <h2>
            {" "}
            <b>Expensive Calculation</b>{" "}
          </h2>
          <h3>{calculation}</h3>
        </div>
      </div>
    </>
  );
};
const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 100; i++) {
    num += 1;
  }
  return num;
};

export default UseMemoDemo01;
