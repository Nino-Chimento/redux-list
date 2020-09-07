import React, { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectorPosts } from "../../redux/selectors";
import { ACTION_UNSET_ACTIVITE } from "../../redux/actions";
import { TActionParams } from "../../redux/Params/actionParams";

export const List = (): JSX.Element => {
  const posts = useSelector(selectorPosts);
  const dispatch = useDispatch();

  const onDelete = (id: number): any =>
    dispatch({ type: ACTION_UNSET_ACTIVITE, payload: id });

  return posts.map((action: TActionParams, index: number) => (
    <div key={index}>
      <p>{` ${action.description} ${action.name} ${action.timerWork}`}</p>
      <button onClick={(): void => onDelete(action.id)}>Elimina Timer</button>
    </div>
  ));
};
