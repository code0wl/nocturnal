import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "../reducers/index";
import immutable from "redux-immutable-state-invariant";

export default function config(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(immutable())
    );
}