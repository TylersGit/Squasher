export default interface BugProps {
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
  closed?: Date | string | null;
  owner: string;
  reporter: string;
  comments: Comment[];
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

export interface Comment {
  id: number;
  bugId: number;
  created: Date | string;
  content: string;
}
