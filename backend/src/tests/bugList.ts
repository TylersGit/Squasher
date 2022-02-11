import { Bug, BugPriority, BugStatus } from "../interfaces";

// A list of bugs to use in the tests.
// This list is used as a mock database.

export const bugs: Bug[] = [
  {
    id: 1,
    title: "Bug 1",
    description: "Bug 1 description",
    stepsToReproduce: "Bug 1 steps to reproduce",
    expectedResult: "Bug 1 expected result",
    actualResult: "Bug 1 actual result",
    status: BugStatus["Open"],
    priority: BugPriority["Low"],
    created: `${new Date()}`,
    updated: `${new Date()}`,
    closed: null,
    owner: "Owner 1",
    reporter: "Reporter 1",
    comments: [
      {
        id: 1,
        bugId: 1,
        created: `${new Date()}`,
        content: "Comment 1",
      },
      {
        id: 2,
        bugId: 1,
        created: `${new Date()}`,
        content: "Comment 2",
      },
    ],
  },
  {
    id: 2,
    title: "Bug 2",
    description: "Bug 2 description",
    stepsToReproduce: "Bug 2 steps to reproduce",
    expectedResult: "Bug 2 expected result",
    actualResult: "Bug 2 actual result",
    status: BugStatus["InProgress"],
    priority: BugPriority["Medium"],
    created: `${new Date()}`,
    updated: `${new Date()}`,
    closed: null,
    owner: "Owner 2",
    reporter: "Reporter 2",
    comments: [
      {
        id: 3,
        bugId: 2,
        created: `${new Date()}`,
        content: "Comment 3",
      },
      {
        id: 4,
        bugId: 2,
        created: `${new Date()}`,
        content: "Comment 4",
      },
    ],
  },
];

export const bugToAdd: Bug = {
  id: 3,
  title: "Bug 3",
  description: "Bug 3 description",
  stepsToReproduce: "Bug 3 steps to reproduce",
  expectedResult: "Bug 3 expected result",
  actualResult: "Bug 3 actual result",
  status: BugStatus["Open"],
  priority: BugPriority["Low"],
  created: `${new Date()}`,
  updated: `${new Date()}`,
  closed: null,
  owner: "Owner 3",
  reporter: "Reporter 3",
  comments: [
    {
      id: 5,
      bugId: 3,
      created: `${new Date()}`,
      content: "Comment 5",
    },
    {
      id: 6,
      bugId: 3,
      created: `${new Date()}`,
      content: "Comment 6",
    },
  ],
};
