import express from "express";
import dotenv from "dotenv";
import bodyparser from "body-parser";
import cors from "cors";
import databaseConnection from "./databaseConnection.js";
import mongoose from "mongoose";

const app = express();

// Middlewares
dotenv.config();
app.use(cors());
app.use(bodyparser.json({ limit: "30mb", type: "json" }));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Blipkart API is running 🎊");
});

app.listen(process.env.PORT, () => {
  console.log(`API is running on port ${process.env.PORT}`);
});

// Database Connections

databaseConnection();

const db = mongoose.connection;

db.on("error", (event) => {
  console.log(event);
});

db.on("open", () => {
  console.log("Database successfully connected");
});
