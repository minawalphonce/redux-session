import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

import { Task } from "./task";

const baseUrl = "http://localhost:3000/tasks/";

@Injectable()
export class TaskProxyService {

    constructor(private http: Http) { }

    insert(task: Task): Observable<any> {
        return this.http.post(baseUrl, task).map(res => res.json());
    }
    update(task: Task): Observable<any> {
        return this.http.put(baseUrl + task.id, task).map(res => res.json());
    }
    select(): Observable<Task[]> {
        return this.http.get(baseUrl).map(res => res.json());
    }
}
