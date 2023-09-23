import axios from "axios";
const baseUrl = "http://localhost:8080/api/v2/tasks";

const getAllTasks = (setToDo) => {
  axios.get(baseUrl).then(({ data }) => {
    // console.log("data--->", data);
    setToDo(data);
  });
};

const addTask = async (e, input, setInput, setToDo) => {
  e.preventDefault();
  try {
    const res = await axios.post(baseUrl, input);
    setToDo((prev) => [...prev, res.data]);
    setInput("");
  } catch (err) {
    console.log(err);
  }
};

const updateTask = async (e, _id, input, setInput, setToDo, setIsUpdating) => {
  e.preventDefault();
  try {
    await axios.patch(`${baseUrl}/${_id}`, input);
    setInput("");
    setIsUpdating(false);
    getAllTasks(setToDo);
  } catch (error) {
    console.log(error);
  }
};

const toggleTodo = (_id) => async () => {
  try {
    await axios.get(`${baseUrl}/${_id}`);
    
  } catch (error) {
    console.log(error);
  }
};

const deleteTask = async (id, setToDo) => {
  await axios.delete(`${baseUrl}/${id}`, id);
  getAllTasks(setToDo);
};

export { getAllTasks, addTask, updateTask, deleteTask, toggleTodo };
