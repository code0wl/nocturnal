import {FILTER_SEARCH} from "./actions";

export function filter(filterValue) {
    return {
        type: FILTER_SEARCH,
        filterValue
    }
}