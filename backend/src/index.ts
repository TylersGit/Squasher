import express, { Request, Response } from "express";
import bugsRouter from "./routers/bugsRouter";
const app = express();

app.use(express.json());

app.use("/bugs", bugsRouter);

// Gracefully shutdown the server when SIGINT is received.
process.on("SIGINT", (): void => {
  console.log("SIGINT received. Gracefully shutting down the server.");
  process.exit(0);
});

const startServer = app.listen(3001, (): void => {
  console.log("Bug Squasher server is starting.");
  console.log("Listening on port 3001");
});

export default startServer;
