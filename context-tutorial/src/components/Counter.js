import React from "react";
import { useAnother } from "../contexts/another";

const Counter = ({ number, increment }) => {
  return (
    <div>
      <h3>{number}</h3>
      <button className="fun-btn counter" onClick={increment}>add</button>
    </div>
  );
};

export default useAnother(Counter);