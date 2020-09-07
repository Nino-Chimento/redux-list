import { Utility } from "../../utils/Utility";
import { ACTION_UNSET_ACTIVITE, ACTION_SET_ACTIVITE } from "../actions";
import { TActionParams } from "../Params/actionParams";

export const reducerActivites = (prevState: any = {}, action: any) => {
  const clonedState = Utility.clone(prevState);

  switch (action.type) {
    case ACTION_SET_ACTIVITE:
      clonedState.list = [...clonedState.list, action.payload];
      console.log(clonedState.list);
      break;
    case ACTION_UNSET_ACTIVITE:
      clonedState.list = clonedState.list.filter(
        (activite: TActionParams) => activite.id !== action.payload
      );
      break;
    default:
      break;
  }
  return clonedState;
};
