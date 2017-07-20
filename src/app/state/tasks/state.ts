import { Task } from "../../model/task";

export interface TasksState {
    tasks: Task[];
    selectedIndex: number;
}

export const TasksInitialState: TasksState = {
    tasks: [],
    selectedIndex: undefined
};
