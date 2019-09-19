import React from "react";
import { useSample } from "../contexts/sample";

const Receives = ({ value }) => {
  return (
    <div>
      <p>현재 설정된 값</p>
      <h3>{ value }</h3>
    </div>
  );
};

export default useSample(Receives);