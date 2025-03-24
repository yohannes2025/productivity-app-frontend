// import React, { useState, useEffect } from "react";
// import { useTaskContext } from "../contexts/TaskContext";
// import { useParams } from "react-router-dom";

// const EditTaskForm = () => {
//   const { getTask, updateTask } = useTaskContext();
//   const { id } = useParams();
//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     dueDate: "",
//     priority: "low",
//     category: "",
//   });

//   useEffect(() => {
//     const fetchTask = async () => {
//       const task = await getTask(id);
//       setFormData(task);
//     };
//     fetchTask();
//   }, [getTask, id]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     updateTask(id, formData);
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className="edit-task-form">
//       <h2>Edit Task</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="title"
//           placeholder="Task Title"
//           value={formData.title}
//           onChange={handleChange}
//         />
//         <textarea
//           name="description"
//           placeholder="Task Description"
//           value={formData.description}
//           onChange={handleChange}
//         ></textarea>
//         <input
//           type="date"
//           name="dueDate"
//           value={formData.dueDate}
//           onChange={handleChange}
//         />
//         <select
//           name="priority"
//           value={formData.priority}
//           onChange={handleChange}
//         >
//           <option value="low">Low</option>
//           <option value="medium">Medium</option>
//           <option value="high">High</option>
//         </select>
//         <input
//           type="text"
//           name="category"
//           placeholder="Task Category"
//           value={formData.category}
//           onChange={handleChange}
//         />
//         <button type="submit">Update</button>
//       </form>
//     </div>
//   );
// };

// export default EditTaskForm;

import React, { useState, useEffect } from "react";
import { useTaskContext } from "../contexts/TaskContext";
import { useParams } from "react-router-dom";

const EditTaskForm = () => {
  const { getTask, updateTask } = useTaskContext();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    dueDate: "",
    priority: "low",
    category: "",
  });

  useEffect(() => {
    const fetchTask = async () => {
      const task = await getTask(id);
      setFormData(task);
    };
    fetchTask();
  }, [getTask, id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTask(id, formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="edit-task-form">
      <h2>Edit Task</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Task Title"
          value={formData.title}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Task Description"
          value={formData.description}
          onChange={handleChange}
        ></textarea>
        <input
          type="date"
          name="dueDate"
          value={formData.dueDate}
          onChange={handleChange}
        />
        <select
          name="priority"
          value={formData.priority}
          onChange={handleChange}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <input
          type="text"
          name="category"
          placeholder="Task Category"
          value={formData.category}
          onChange={handleChange}
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditTaskForm;
