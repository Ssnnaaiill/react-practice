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

const Form = ({value, onChange, onCreate, onKeyPress, color}) => {
  return (
    <div className="form">
      <input value={value} onChange={onChange} onKeyPress={onKeyPress} style={{color}}/>
      <div className="create-button" onClick={onCreate}>add</div>
    </div>
  );
};

export default Form;