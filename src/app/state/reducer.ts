import { taskReducer } from "./tasks/reducer";

export function noop(state) {
    return state;
}

export const reducer = {
    tasks: taskReducer,
    common: noop,
};
