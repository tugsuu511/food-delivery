import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { foodsRouter } from "./routes/food.routes.js";

dotenv.config();
const app = express();
const port = 3000;

app.use(express.json());

const dbUri = process.env.MONGO_CONNECTION_STRING;
if (!dbUri) {
  console.error("Mongo URI is not defined!");
  process.exit(1);
}
mongoose
  .connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

app.use("/food", foodsRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
