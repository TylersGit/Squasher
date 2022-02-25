// Date fields are of type Date or string, as its just easier to test this way.
// The intent is to use the Date object to store the date and time, but the string
// is easier to test.
//
// Thank you JSON for being a problem.

export interface Bug {
  id: number;
  title: string;
  description: string;
  stepsToReproduce: string;
  expectedResult: string;
  actualResult: string;
  status: BugStatus;
  priority: BugPriority;
  created: Date | string;
  updated: Date | string;
  closed?: Date | null;
  owner: string;
  reporter: string;
  comments: Comment[];
}

export interface Comment {
  id: number;
  bugId: number;
  created: Date | string;
  content: string;
}

export enum BugStatus {
  Open = "Open",
  InProgress = "InProgress",
  Fixed = "Fixed",
  Closed = "Closed",
}

export enum BugPriority {
  Low = "Low",
  Medium = "Medium",
  High = "High",
  Critical = "Critical",
}
