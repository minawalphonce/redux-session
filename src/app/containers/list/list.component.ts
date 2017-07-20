import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { TasksStateService } from "../../state/tasks/state-service";
import { Task } from "../../model/task";

@Component({
  selector: "rs-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.less"]
})
export class ListComponent implements OnInit {

  tasks$: Observable<Task[]>;

  constructor(private tasksStateService: TasksStateService) {
    this.tasks$ = this.tasksStateService.selectAllTasks();
  }

  onDoneChange(task: Task) {
    this.tasksStateService.dispatchDoneTask(task);
  }
  ngOnInit() {
  }

}
