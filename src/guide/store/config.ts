import { createStore } from "redux";
import { rootReducer } from "../reducers/index";

export default function config(initialState: any) {
  return createStore(rootReducer, initialState);
}
