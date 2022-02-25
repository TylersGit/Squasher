import React, { FC } from "react";
import { BugPriority, BugStatus } from "../interfaces/BugInterfaces";
import "../styles/App.css";
import Bug from "./Bug";
import Navbar from "./Navbar";

const testBug = {
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

const App: FC = () => {
  return (
    <div>
      <Navbar />
      <div className="App">
        <Bug {...testBug}></Bug>
      </div>
    </div>
  );
};

export default App;
