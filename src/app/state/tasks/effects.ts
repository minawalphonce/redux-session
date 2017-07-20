import { Injectable } from "@angular/core";
import { Effect, Actions } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/withLatestFrom";
import * as _ from "lodash";

import { State } from "../state";
import { TasksActions } from "./actions";
import { TaskProxyService } from "../../model/task.proxy";


@Injectable()
export class TasksEffectsService {

    constructor(
        private actions$: Actions,
        private store: Store<State>,
        private taskProxyService: TaskProxyService) { }

    @Effect()
    onLoadTasks() {
        return this.actions$.ofType(TasksActions.LOAD_TASKS)
            .switchMap(action => {
                return this.taskProxyService
                    .select()
                    .map(tasks => TasksActions.createAddTasksActions(tasks));
            });
    }

    @Effect({ dispatch: false })
    onTaskDone() {
        return this.actions$.ofType(TasksActions.DONE_TASK)
            .switchMap(action => {
                return this.taskProxyService.update(action.payload);
            });
    }
}
