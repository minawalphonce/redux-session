import { Action } from "@ngrx/store";
import * as _ from "lodash";

import { TasksState } from "./state";
import { TasksActions } from "./actions";
import { Task } from "../../model/task";

export function taskReducer(state: TasksState, action: Action): TasksState {
    switch (action.type) {
        case TasksActions.ADD_TASK:
            return {
                ...state,
                tasks: [
                    ...state.tasks,
                    action.payload
                ]
            };
        case TasksActions.ADD_TASKS:
            return {
                ...state,
                tasks: action.payload
            };
        case TasksActions.DONE_TASK:
            return {
                ...state,
                tasks: [
                    ..._.filter(state.tasks, t => t.id !== action.payload.id),
                    { ...action.payload }
                ]
            };
        case TasksActions.EDIT_TASK:
            return {
                ...state,
                tasks: [
                    ..._.filter(state.tasks, t => t.id !== action.payload.id),
                    { ...action.payload }
                ]
            };
        case TasksActions.LOAD_TASKS:
        default:
            return state;
    }
}
