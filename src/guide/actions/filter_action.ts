import { FILTER_SEARCH } from "./actions";

export function filter(filterValue: string = "") {
  return {
    type: FILTER_SEARCH,
    filterValue
  };
}
