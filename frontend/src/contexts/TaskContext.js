import React, { createContext, useState, useEffect } from "react";
import { fetchTasks, fetchUser } from "../Utils/api";

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

  return (
    <TaskContext.Provider value={{ tasks, user }}>
      {children}
    </TaskContext.Provider>
  );
};
export default TaskContext;