import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "rs-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.less"]
})
export class HeaderComponent implements OnInit {

  @Input() pendingTasksCount: number;
  constructor() { }

  ngOnInit() {
  }

}
