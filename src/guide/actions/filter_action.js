import {FILTER_SEARCH} from "./actions";

export default function filter(filterValue) {
    return {
        type: FILTER_SEARCH,
        filterValue
    }
}