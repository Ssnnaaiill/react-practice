import React, { useState, useMemo, useCallback, useRef } from "react";

const getAverage = numbers => {
  console.log("Calculating average...");
  if (numbers.length === 0) {
    return 0;
  }
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");
  const inputEl = useRef(null);

  // create function only when component is first rendered
  const onChange = useCallback(e => {
    setNumber(e.target.value);
  }, []);

  // create function only when number or list is changed
  const onInsert = useCallback(
    e => {
      const nextList = list.concat(parseInt(number));
      setList(nextList);
      setNumber("");
      inputEl.current.focus();
    },
    [number, list]
  );

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <h1>Average</h1>
      <input value={number} onChange={onChange} ref={inputEl} />
      <button onClick={onInsert}>submit</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>AVERAGE:</b>&nbsp;{avg}
      </div>
    </div>
  );
};

export default Average;
