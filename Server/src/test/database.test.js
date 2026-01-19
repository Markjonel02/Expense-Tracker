const { expect } = require("chai");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" }); // adjust path if needed
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
