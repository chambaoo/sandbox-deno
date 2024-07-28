// import { Assignee } from "./assignee.ts";

export interface Task {
  id: number;
  title: string;
  description?: string;
  // assignee?: Assignee;
  assignee?: string;
  startDate?: Date;
  endDate?: Date;
}
