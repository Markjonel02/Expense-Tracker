const request = require("supertest");
const { expect } = require("chai");
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config(); // adjust path if needed
const connectDb = require("../config/connectioDb"); // adjust path if needed

describe("MongoDB Connection", function () {
  this.timeout(10000); // allow time for DB connection

  before(async () => {
    await connectDb();
  });

  it("should connect to MongoDB successfully", () => {
    // 0 = disconnected, 1 = connected, 2 = connecting, 3 = disconnecting
    expect(mongoose.connection.readyState).to.equal(1);
  });

  after(async () => {
    await mongoose.connection.close();
  });
});

const app = express();
app.get("/", (req, res) => res.send("API is running..."));

describe("Server Integration", function () {
  this.timeout(10000);

  before(async () => {
    await connectDb(); // ✅ ensure DB is connected
  });

  it("should respond to GET / with 200", async () => {
    const res = await request(app).get("/");
    expect(res.status).to.equal(200);
    expect(res.text).to.equal("API is running...");
  });

  after(async () => {
    await require("mongoose").connection.close();
  });
});
