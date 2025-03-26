import React, { useState, useEffect, useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import FilterPanel from "../components/FilterPanel";
import TaskList from "../components/TaskList";
import CreateTaskForm from "../components/CreateTaskForm";
import Footer from "../components/Footer";

const Dashboard = () => {
  const { tasks, fetchTasks, createTask } = useContext(TaskContext);
  const [filteredTasks, setFilteredTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  const handleSearch = (searchTerm) => {
    const filtered = tasks.filter((task) =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTasks(filtered);
  };

  const handleFilter = (filters) => {
    const filtered = tasks.filter((task) => {
      return (
        (!filters.dueDate || task.dueDate === filters.dueDate) &&
        (!filters.priority || task.priority === filters.priority) &&
        (!filters.category || task.category === filters.category) &&
        (!filters.state || task.state === filters.state)
      );
    });
    setFilteredTasks(filtered);
  };

  const handleCreateTask = (taskData) => {
    createTask(taskData);
  };

  return (
    <div className="dashboard">
      <Header />
      <SearchBar onSearch={handleSearch} />
      <FilterPanel onFilter={handleFilter} />
      <TaskList
        tasks={filteredTasks.length > 0 ? filteredTasks : tasks}
        onView={(id) => console.log("View task:", id)}
        onEdit={(id) => console.log("Edit task:", id)}
        onDelete={(id) => console.log("Delete task:", id)}
      />
      <CreateTaskForm onCreateTask={handleCreateTask} />
      <Footer />
    </div>
  );
};

export default Dashboard;
