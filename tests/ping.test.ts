import request from "supertest";
import app from "../src/app";

describe("Ping Controller", () => {
  it("should respond with pong", async () => {
    const response = await request(app).get("/ping");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: "pong" });
  });
});
