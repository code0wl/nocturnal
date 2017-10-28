import {FILTER_SEARCH} from "../../reducers/actions/actions";

export default function filter(state = [], action) {
    switch (action.type) {
        case FILTER_SEARCH:
            state.push(action.filterValue);
            return [...state, Object.assign({}, action.filterValue)];

        default:
            return [Object.assign({}, state)];
    }
}