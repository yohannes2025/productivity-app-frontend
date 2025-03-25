import React, { useState } from "react";
import axios from "axios";

const CreateTaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/tasks/", {
        title,
        description,
        dueDate,
        priority,
        category,
      });
      // Reset form fields
      setTitle("");
      setDescription("");
      setDueDate("");
      setPriority("");
      setCategory("");
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };

  return (
    <div className="create-task-form">
      <h2>Create New Task</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
        <label htmlFor="due-date">Due Date:</label>
        <input
          type="date"
          id="due-date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          required
        />
        <label htmlFor="priority">Priority:</label>
        <select
          id="priority"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          required
        >
          <option value="">Select Priority</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <label htmlFor="category">Category:</label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="">Select Category</option>
          <option value="production">Production</option>
          <option value="marketing">Marketing</option>
          <option value="utilities">Utilities</option>
          <option value="transport">Transport</option>
          <option value="sales">Sales</option>
          <option value="security">Security</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateTaskForm;
