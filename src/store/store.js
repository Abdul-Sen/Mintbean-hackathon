import { createStore, combineReducers } from "redux";
import markdownReducer from "./markdownReducer";
export default () => {
  const rootReducer = combineReducers({
    markdownReducer
  });

  //global store
  const store = createStore(rootReducer);

  return store;
};
