const express = require("express");
require("dotenv").config();
const app = express();
const connectDB = require("./db/connect");
const tasks = require("./routes/taskRoute");
const cors = require("cors");

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use("/api/v2/tasks", tasks);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server listening at ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
