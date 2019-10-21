import React, { useState, useReducer } from "react";

function reducer(state, action) {
  // different actions according to action.type
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 10 };
    case "DECREMENT":
      return { value: state.value - 10 };
    default:
      return state;
  }
}

const Counter = () => {
  /**
   * useState
   * - value: counter value as status
   * - setValue: function for changing value
   * @param value
   * @param setValue
   */

  // set initial counter value 0
  const [value, setValue] = useState(0);

  // counter using useReducer
  const [state, dispatch] = useReducer(reducer, { value: 0 });

  return (
    <div>
      <h1>Counter</h1>
      <p>
        Current counter value is <b>{value}</b>.
      </p>
      <button onClick={() => setValue(value - 1)}>(-1)</button>
      <button onClick={() => setValue(value + 1)}>(+1)</button>
      <p>
        Current counter value is <b>{state.value}</b>.
      </p>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>(-10)</button>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>(+10)</button>
    </div>
  );
};

export default Counter;
