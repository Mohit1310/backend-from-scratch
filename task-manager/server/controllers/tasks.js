const Task = require("../models/taskSchema");

const getAllTasks = async (req, res) => {
  try {
    const allTasks = await Task.find({});
    res.status(200).json(allTasks);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createTask = async (req, res) => {
  try {
    const createTask = await Task.create(req.body);
    res.status(201).json(createTask);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getSingleTask = async (req, res) => {
  try {
    const getTask = await Task.findOne({ _id: req.params.id });
    if (!getTask) {
      return res.status(404).json({ msg: "Task not found" });
    }
    res.status(200).json(getTask);
  } catch (error) {
    res.status(500).json({ error });
  }
};

const updateTask = async (req, res) => {
  try {
    const updateTask = await Task.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true, runValidators: true }
    );
    if (!updateTask) {
      return res.status(404).json({ msg: "Task not found" });
    }
    res.status(200).json(updateTask);
  } catch (error) {
    res.status(500).json({ error });
  }
};

const toggleCompletedTask = async (req, res) => {
  try {
    const toggleTask = await Task.findOne({ _id: req.params.id });
    if (!toggleTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    // Toggle the completed field
    toggleTask.completed = !toggleTask.completed;

    await toggleTask.save();

    res.status(200).json({task: toggleTask});
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const deleteTask = async (req, res) => {
  try {
    const deleteTask = await Task.findOneAndDelete({ _id: req.params.id });
    if (!deleteTask) {
      return res.status(404).json({ msg: "Task not found" });
    }
    res.status(200).json(deleteTask);
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  deleteTask,
  updateTask,
  toggleCompletedTask,
};
