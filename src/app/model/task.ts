import * as moment from "moment";

export interface Task {
    title: string;
    description: string;
    due: Date | moment.Moment;
    done: boolean;
    id?: number;
}
