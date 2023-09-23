import React, { useEffect, useState } from "react";
import Task from "./components/Tasks";
import {
  addTask,
  deleteTask,
  getAllTasks,
  updateTask,
  toggleTodo
} from "./utils/handleApi";

const App = () => {
  const [toDo, setToDo] = useState([]);
  const [input, setInput] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [taskId, setTaskId] = useState("");

  useEffect(() => {
    getAllTasks(setToDo);
  }, []);

  const updateMode = (_id, input) => {
    setIsUpdating(true);
    setInput(input);
    setTaskId(_id);
  };

  return (
    <div>
      <h1 className="font-bold text-5xl text-center p-2 m-2 bg-teal-200">
        TODO
      </h1>
      <form className="flex justify-center">
        <input
          type="text"
          className="bg-gray-50 p-2 border mx-2"
          placeholder="Add task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="bg-green-400 p-2 px-6"
          onClick={
            isUpdating
              ? (e) =>
                  updateTask(
                    e,
                    taskId,
                    { task: input },
                    setInput,
                    setToDo,
                    setIsUpdating
                  )
              : (e) => addTask(e, { task: input }, setInput, setToDo)
          }
        >
          {isUpdating ? "Update" : "Add"}
        </button>
      </form>
      <div className="mx-auto w-96">
        {toDo.map((task) => (
          <Task
            key={task._id}
            text={task.task}
            updateTodo={() => updateMode(task._id, task.task)}
            deleteTodo={() => deleteTask(task._id, setToDo)}
            isCompleted={() => toggleTodo(task._id)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
