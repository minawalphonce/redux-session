import { Action } from "@ngrx/store";
import { Task } from "../../model/task";

export namespace TasksActions {
    export const ADD_TASK = "[tasks] add task";
    export const EDIT_TASK = "[tasks] edit task";
    export const DONE_TASK = "[tasks] done task";
    export const LOAD_TASKS = "[tasks] load tasks";
    export const ADD_TASKS = "[tasks] add tasks";

    export function createAddTaskAction(task: Task): Action {
        return {
            type: ADD_TASK,
            payload: task
        };
    }

    export function createEditTaskAction(task: Task): Action {
        return {
            type: EDIT_TASK,
            payload: task
        };
    }

    export function createDoneTaskAction(task: Task): Action {
        return {
            type: DONE_TASK,
            payload: task
        };
    }

    export function createLoadTasksAction(): Action {
        return {
            type: LOAD_TASKS
        };
    }

    export function createAddTasksActions(tasks: Task[]): Action {
        return {
            type: ADD_TASKS,
            payload: tasks
        };
    }
}
