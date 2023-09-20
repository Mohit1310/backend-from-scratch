const express = require("express");
require("dotenv").config();
const app = express();
const connectDB = require("./db/connect");
const Task = require("./models/taskSchema");

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Namaskaram Everyone !!!");
});

app.get("/api/v2/tasks", async (req, res) => {
  try {
    const getTask = await Task.find({});
    res.status(200).json({ getTask });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
});

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server listening at ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
