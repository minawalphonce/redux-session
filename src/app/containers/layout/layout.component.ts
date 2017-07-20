import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { TasksStateService } from "../../state/tasks/state-service";

@Component({
  selector: "rs-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.less"]
})
export class LayoutComponent implements OnInit {
  pendingTasksCount$: Observable<number>;

  constructor(private tasksStateService: TasksStateService) {
    this.tasksStateService.dispatchLoadTasks();
    this.pendingTasksCount$ = this.tasksStateService.selectAllNotDoneTasks();
  }

  ngOnInit() {
  }

}
