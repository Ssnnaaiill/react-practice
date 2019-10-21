import React, { useState } from "react";
import Counter from "./Counter";
import Info from "./Info";
import Average from "./Average";

const App = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
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
      <hr />
      <Average />
    </div>
  );
};

export default App;
