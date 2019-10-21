import React, { useState } from "react";
import Counter from "./Counter";
import Info from "./Info";

const App = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <h1>Counter</h1>
      <Counter />
      <hr />
      <h1>Info</h1>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? "hide" : "show"}
      </button>
      {visible && <Info />}
    </div>
  );
};

export default App;
