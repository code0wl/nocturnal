import { RUN_UNIT_TEST } from "./actions";

export function unitTest(test: string = "") {
  return {
    type: RUN_UNIT_TEST,
    test
  };
}
