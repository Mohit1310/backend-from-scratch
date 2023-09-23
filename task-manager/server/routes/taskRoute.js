const express = require("express");
const router = express.Router();
const {
  getAllTasks,
  createTask,
  getSingleTask,
  deleteTask,
  updateTask,
  toggleCompletedTask,
} = require("../controllers/tasks");

router.route("/").get(getAllTasks).post(createTask);
router
  .route("/:id")
  .get(getSingleTask)
  .get(toggleCompletedTask)
  .patch(updateTask)
  .delete(deleteTask);

module.exports = router;
