import { createStore } from "redux";
import { rootReducer } from "../reducers/index";

export default function config(initialState) {
  return createStore(rootReducer, initialState);
}
