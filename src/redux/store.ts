import { combineReducers, createStore, applyMiddleware } from "redux";
import { reducerPosts } from "./reducers/reducerPosts";

import { middlewares } from "./middlewares";

import { composeWithDevTools } from "redux-devtools-extension";
import { middlewareSaga } from "./middlewares/middlewareSaga";

const initialState = {
  posts: {
    list: [],
  },
};

function* rootSaga() {}

const rootReducer = combineReducers({
  posts: reducerPosts,
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
