import React from "react";
import Task from "./tasks";

const App = () => {
  return (
    <div>
      <h1 className="font-bold text-5xl text-center p-2 m-2 bg-teal-200">TODO</h1>
      <Task />
    </div>
  );
};

export default App;
