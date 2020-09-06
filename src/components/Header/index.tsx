import React, { useState } from "react";
import { Select } from "../Select";
import { useDispatch } from "react-redux";
import { ACTION_SET_POST } from "../../redux/actions";

export const Header = (): JSX.Element => {
  const dispatch = useDispatch();
  const [name, setName] = useState();
  const [description, setDescription] = useState("");

  const setPost = (): void => {
    const payload = { name, description };
    dispatch({ type: ACTION_SET_POST, payload: payload });
  };
  return (
    <div>
      <input
        onChange={(event: any): void => setDescription(event.target.value)}
      ></input>
      <Select setName={setName} />
      <button onClick={(): void => setPost()}>Play</button>
    </div>
  );
};
