//src/contexts/TaskContext
// import React, { createContext, useState, useEffect, useContext } from "react";
// import { fetchTasks, fetchUser } from "../utils/api";

// export const TaskContext = createContext();

// export const TaskProvider = ({ children }) => {
//   const [tasks, setTasks] = useState([]);
//   const [user, setUser] = useState({});

//   useEffect(() => {
//     const fetchData = async () => {
//       const taskData = await fetchTasks();
//       const userData = await fetchUser();
//       setTasks(taskData);
//       setUser(userData);
//     };
//     fetchData();
//   }, []);

//   return (
//     <TaskContext.Provider value={{ tasks, user }}>
//       {children}
//     </TaskContext.Provider>
//   );
// };

// // Custom hook to use the TaskContext
// export const useTaskContext = () => {
//   return useContext(TaskContext);
// };

// export default TaskContext;


import React, { createContext, useState, useEffect, useContext } from "react";
import { fetchTasks, fetchUser } from "../utils/api"; // Ensure we use the correct import path

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const taskData = await fetchTasks();
      const userData = await fetchUser();
      setTasks(taskData);
      setUser(userData);
    };
    fetchData();
  }, []);

  const updateTask = async (updatedTask) => {
    // Here is where you would normally call an API to update the task
    const updatedTasks = tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
    setTasks(updatedTasks);
    return updatedTask; // Return the updated task
  };

  return (
    <TaskContext.Provider value={{ tasks, user, updateTask }}>
      {children}
    </TaskContext.Provider>
  );
};

// Custom hook to use the TaskContext
export const useTaskContext = () => {
  return useContext(TaskContext);
};

export default TaskContext;