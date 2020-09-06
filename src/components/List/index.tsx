import React, { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectorPosts } from "../../redux/selectors";
import { ACTION_UNSET_POST } from "../../redux/actions";

export const List = (): JSX.Element => {
  const posts = useSelector(selectorPosts);
  const dispatch = useDispatch();

  const onDelete = (description: string): any =>
    dispatch({ type: ACTION_UNSET_POST, payload: description });

  return posts.map((post: any, index: number) => (
    <div key={index}>
      <p>
        {post.description} {post.name}
      </p>
      <button onClick={() => onDelete(post.description)}>Elimina Post</button>
    </div>
  ));
};
