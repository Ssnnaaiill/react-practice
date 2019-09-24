import React from "react";
import "./Form.css";


/**
 * Form
 * - Todo list input form
 * @param value
 * @param onChange
 * @param onCreate
 * @param onKeyPress
 */

const Form = ({value, onChange, onCreate, onKeyPress}) => {
  return (
    <div className="form">
      <input value={value} onChange={onChange} onCreate={onCreate} onKeyPress={onKeyPress}/>
      <div className="create-button" onClick={onCreate}>add</div>
    </div>
  );
};

export default Form;