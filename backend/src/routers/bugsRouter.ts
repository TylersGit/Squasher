// Create a router for the bugs endpoint.
import { Router, Request, Response, json } from "express";
import { Bug } from "../interfaces";
import { bugs } from "../tests/bugList";
const bugsRouter = Router();
bugsRouter.use(json());

// Use the test bug list as a mock database.
const bugDatabase = bugs;

// Get all the bugs.
bugsRouter.get("/", (req: Request, res: Response): void => {
  res.status(200).send(bugDatabase);
});

// Get a single bug.
bugsRouter.get("/:id", (req: Request, res: Response): void => {
  const bug = bugDatabase.find(
    (bug: Bug) => bug.id === parseInt(req.params.id)
  );
  if (bug) {
    res.status(200).send(bug);
  } else {
    res.status(404).send({ message: "Bug not found." });
  }
});

// Add a bug.
bugsRouter.post("/", (req: Request, res: Response): void => {
  const bug = req.body;

  // This is a mock implementation for now.
  // Automatic ID generation will be handled by the database.

  // Workaround solution to get tests to pass until the database is implemented.
  bug.id = bug.id ? bug.id : bugDatabase.length + 1;
  bugDatabase.push(bug);
  res.status(201).send(bug);
});

// Update a bug.
bugsRouter.put("/:id", (req: Request, res: Response): void => {
  const updatedBug = req.body;
  const bug = bugDatabase.find(
    (bug: Bug) => bug.id === parseInt(req.params.id)
  );
  if (bug) {
    bugDatabase[bug.id - 1] = updatedBug;
    res.status(200).send(updatedBug);
  } else {
    res.status(404).send({ message: "Bug not found." });
  }
});

export default bugsRouter;
