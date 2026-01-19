const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const ConnectionDB = require("./config/connectioDb");
const cors = require("cors");
const connectDb = require("./config/connectioDb");
dotenv.config();

const app = express();
const Port = process.env.PORT || 5000;

/* middlewares */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* routes  */

app.get("/", (req, res) => {
  res.status(200).send("API is running...");
  console.log("Api is Running!");
});

ConnectionDB()
  .then(() => {
    app.listen(Port, () => {
      console.log(`Localhost is running on local ${Port} `);
      console.log(`✅ Database connected successfully.`);
    });
  })
  .catch((error) => {
    console.error("❌ Database connection failed:", error);
    process.exit();
  });
