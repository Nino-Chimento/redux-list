import { Utility } from "../../utils/Utility";
import { ACTION_SET_POST, ACTION_UNSET_POST } from "../actions";

export const reducerPosts = (prevState: any = {}, action: any) => {
  const clonedState = Utility.clone(prevState);

  switch (action.type) {
    case ACTION_SET_POST:
      clonedState.list = [...clonedState.list, action.payload];
      console.log(clonedState.list);
      break;
    case ACTION_UNSET_POST:
      // clonedState.list = clonedState.list.splice(action.payload, 1);
      console.log(action.payload);

      clonedState.list = clonedState.list.filter(
        (post: any) => post.description !== action.payload
      );

      break;
    default:
      break;
  }
  return clonedState;
};
