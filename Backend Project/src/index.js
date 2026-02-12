// require("dotenv").config({ path: "./env" });

import dotenv from "dotenv";

// import mongoose from "mongoose";
// import { DB_NAME } from "./constants.js";

import connectDB from "./db/index.js";

dotenv.config({
  path: './env'
})

connectDB();

/*

import express from "express";
const app = express();

// Immediately Invoked Async Function (IIFE) =>
// This is an async function that runs immediately.
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("ERRR: ", error);
      throw error;
    });

    // This runs only if MongoDB connected successfully.
    app.listen(process.env.PORT, () => {
      console.log(`App is running on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
})();

*/
