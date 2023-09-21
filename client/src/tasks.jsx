import React, { useEffect, useState } from "react";
import axios from "axios";
import { BiSolidEdit } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";

const tasks = () => {
  const [allTasks, setAllTasks] = useState([]);

  useEffect(() => {
    getAllTasks();
  }, []);

  const getAllTasks = async () => {
    try {
      const gettingAllTasks = await axios.get(
        `http://localhost:8080/api/v2/tasks/`
      );
      console.log(gettingAllTasks.data.allTasks);
      setAllTasks(gettingAllTasks.data.allTasks);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col">
      {allTasks.map((task) => (
        <div key={task._id} className="flex gap-2 bg-gray-200 p-2 my-2 mx-auto">
          <p className="text-lg">{task.task}</p>
          <BiSolidEdit fontSize={25} className="" />
          <MdDeleteOutline fontSize={25} className="" />
        </div>
      ))}
    </div>
  );
};

export default tasks;
