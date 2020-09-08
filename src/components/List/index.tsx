import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectorPosts } from "../../redux/selectors";
import { ACTION_UNSET_ACTIVITE } from "../../redux/actions";
import { TActionParams } from "../../redux/Params/actionParams";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../Header/partials/button";
import { Wrapper } from "./partials/wrapper";
import { WrapperText } from "./partials/wrapperText";
import { Text } from "./partials/text/index";

export const List = (): JSX.Element => {
  const posts = useSelector(selectorPosts);
  const dispatch = useDispatch();

  const onDelete = (id: number): any =>
    dispatch({ type: ACTION_UNSET_ACTIVITE, payload: id });

  return posts.map((action: TActionParams, index: number) => (
    <Wrapper key={index}>
      <WrapperText>
        <Text>{action.description}</Text>
        <Text>{action.name}</Text>
        <Text>{action.timerWork}</Text>
      </WrapperText>
      <Button onClick={(): void => onDelete(action.id)}>
        <FontAwesomeIcon icon={faTrashAlt} color="red" size="2x" />
      </Button>
    </Wrapper>
  ));
};
