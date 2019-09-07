import { SELECTED_COMPONENT } from "./actions";

export function selectedComponent(selectedComponent = null) {
  return {
    type: SELECTED_COMPONENT,
    selectedComponent
  };
}
