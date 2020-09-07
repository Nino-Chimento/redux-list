import { combineReducers, createStore, applyMiddleware } from "redux";
import { reducerActivites } from "./reducers/reducerActivites";

import { middlewares } from "./middlewares";

import { composeWithDevTools } from "redux-devtools-extension";
import { middlewareSaga } from "./middlewares/middlewareSaga";

const initialState = {
  activites: {
    list: [],
  },
};

function* rootSaga() {}

const rootReducer = combineReducers({
  activites: reducerActivites,
});

export const configureStore = () => {
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares))
  );

  middlewareSaga.run(rootSaga);

  return store;
};
