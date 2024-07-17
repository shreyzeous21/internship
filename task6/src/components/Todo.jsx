import { useState, useEffect } from "react";

const Todo = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = () => {
    if (task.trim() !== "") {
      const newTasks = [...tasks, task].sort((a, b) => a.localeCompare(b));
      setTasks(newTasks);
      setTask("");
    }
  };

  const handleDeleteTask = (taskToDelete) => {
    const newTasks = tasks.filter((task) => task !== taskToDelete);
    setTasks(newTasks);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 bg-white rounded shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-4">Todo List</h1>
      <div className="mb-4">
        <input
          type="text"
          value={task}
          onChange={handleInputChange}
          className="w-full p-2 border rounded mb-2"
          placeholder="Enter a new task"
        />
        <button
          onClick={handleAddTask}
          className="w-full p-2 bg-blue-500 text-white rounded"
        >
          Add Task
        </button>
      </div>
      <ul className="list-disc pl-5">
        {tasks.map((task, index) => (
          <li key={index} className="mb-2 flex justify-between items-center">
            {task}
            <button
              onClick={() => handleDeleteTask(task)}
              className="p-1 bg-red-500 text-white rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
