// Initialize testing the rest API
import supertest from "supertest";
import startServer from "../index";
import { bugs, bugToAdd } from "./bugList";

describe("Bugs endpoint", (): void => {
  let server: any;
  beforeAll(async () => {
    server = startServer;

    // No need to initialize the database here. The database is initialized in index.ts.
    // Kept as a reminder, though.
    //
    // When implementing the database, it will likely be necessary to initialize the test database.
    //
    // await supertest(server).post("/bugs").send(bugs);
  });

  afterAll(() => {
    server.close();
  });

  // Test the getting all the bugs.
  it("should return a list of bugs", async () => {
    const response = await supertest(server).get("/bugs");

    expect(response.status).toBe(200);

    // Stringify both the expected and actual results to compare them.
    // JSON is being weird during testing.
    expect(JSON.stringify(response.body)).toEqual(JSON.stringify(bugs));
  });

  // Test the getting a single bug.
  it("should return a single bug", async () => {
    const response = await supertest(server).get("/bugs/1");
    expect(response.status).toBe(200);
    expect(response.body).toEqual(bugs[0]);
  });

  // Test the getting a bug that doesn't exist.
  it("GET on a non existent bug should return a 404 response", async () => {
    const response = await supertest(server).get("/bugs/3");

    expect(response.status).toBe(404);
  });

  // Test adding a bug.
  it("should add a bug", async () => {
    const response = await supertest(server).post("/bugs").send(bugToAdd);
    expect(response.status).toBe(201);
    expect(response.body).toEqual(bugToAdd);
  });

  // Test the updating a bug.
  it("should update a bug", async () => {
    let bug = bugs[0];
    bug.title = "Updated bug 1";

    const response = await supertest(server).put("/bugs/1").send(bug);
    const postUpdate = await supertest(server).get("/bugs/1");

    expect(response.status).toBe(200);
    expect(response.body).toEqual(bug);
    expect(postUpdate.body).toEqual(bug);
  });
});
