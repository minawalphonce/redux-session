import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import * as _ from "lodash";

import { Task } from "../../model/task";
import { State } from "../state";
import { TasksActions } from "./actions";

@Injectable()
export class TasksStateService {

    constructor(private store: Store<State>) { }

    selectAllTasks(): Observable<Task[]> {
        return this.store.select(s => s.tasks.tasks);
    }

    selectAllNotDoneTasks(): Observable<number> {
        return this.store.select(s => s.tasks.tasks)
            .map(tasks => _.filter(tasks, t => !t.done).length);
    }

    dispatchDoneTask(task: Task) {
        this.store.dispatch(TasksActions.createDoneTaskAction(task));
    }

    dispatchNewTask(task: Task) {
        this.store.dispatch(TasksActions.createAddTaskAction(task));
    }

    dispatchLoadTasks() {
        this.store.dispatch(TasksActions.createLoadTasksAction());
    }
}
