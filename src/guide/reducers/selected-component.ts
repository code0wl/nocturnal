import { SELECTED_COMPONENT } from "../actions/actions";

export default function filter(state = "", action: any) {
  switch (action.type) {
    case SELECTED_COMPONENT:
      return action.selectedComponent;
    default:
      return state;
  }
}
