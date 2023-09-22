import React from "react";
import { BiSolidEdit } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";

const Tasks = ({ text, updateTodo, deleteTodo }) => {
  return (
    <div className="flex justify-between gap-2 bg-gray-200 p-2 my-2  mx-auto">
      <p className="text-lg cursor-pointer">{text}</p>
      <div className="flex gap-2">
        <BiSolidEdit
          fontSize={25}
          className="cursor-pointer"
          onClick={updateTodo}
        />
        <MdDeleteOutline
          fontSize={25}
          className="cursor-pointer"
          onClick={deleteTodo}
        />
      </div>
    </div>
  );
};

export default Tasks;
