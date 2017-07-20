import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

import { Task } from "../../model/task";

@Component({
  selector: "rs-grid",
  templateUrl: "./grid.component.html",
  styleUrls: ["./grid.component.less"]
})
export class GridComponent implements OnInit {

  @Input() tasks: Task[];
  @Output() doneChange = new EventEmitter<Task>();
  constructor() { }

  ngOnInit() {
  }

  onToggleDone(task: Task) {
    task.done = !task.done;
    this.doneChange.emit(task);
  }
}
