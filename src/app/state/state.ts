import { CommonState } from "./common/state";
import { TasksState, TasksInitialState } from "./tasks/state";

export interface State {
    tasks: TasksState;
    common: CommonState;
}

export const initialState: State = {
    tasks: TasksInitialState,
    common: undefined
};
