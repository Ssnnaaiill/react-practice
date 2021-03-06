import React, { useState, useEffect } from "react";
import useInputs from "./useInputs";

const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  // variables for info using reducer
  const [state, dispatch] = useInputs({
    name: "",
    nickname: ""
  });
  const { id, email } = state;

  // give empty array for second param of useEffect...
  // ...when you want to call cleanup function only when component is unmounted
  useEffect(() => {
    console.log("effect");
    console.log(name);
    return () => {
      console.log("cleanup");
      console.log(name);
    };
  });

  const onChangeName = e => {
    setName(e.target.value);
  };

  const onChangeNickname = e => {
    setNickname(e.target.value);
  };

  const onChange = e => {
    dispatch(e.target);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
        <br />
        <b>NAME: </b>
        {name}
        <br />
        <b>NICKNAME: </b>
        {nickname}
      </div>
      <div>
        <input name="id" value={id} onChange={onChange} />
        <input name="email" value={email} onChange={onChange} />
        <br />
        <b>ID: </b>
        {id}
        <br />
        <b>EMAIL: </b>
        {email}
      </div>
    </div>
  );
};

export default Info;
