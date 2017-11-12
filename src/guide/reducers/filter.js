import {FILTER_SEARCH} from "../actions/actions";

export default function filter(state = [], action) {
    switch (action.type) {
        case FILTER_SEARCH:
            return [...state, Object.assign({}, action.filterValue)];
        default:
            return [Object.assign({}, state)];
    }
}