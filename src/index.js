import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
const app = express();
const port = 3000;

mongoose.connect(process.env.MONGO_CONNECTION_STRING).then(() => {
  console.log("database connection established");
});

app.use(express.json())

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
