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

// import React, { useState, useEffect } from "react";
// import { useTaskContext } from "../contexts/TaskContext";

// const EditTaskForm = ({ task, onClose }) => {
//   const { updateTask } = useTaskContext();
//   const [title, setTitle] = useState(task.title);
//   const [description, setDescription] = useState(task.description);
//   const [dueDate, setDueDate] = useState(task.dueDate);
//   const [priority, setPriority] = useState(task.priority);

//   useEffect(() => {
//     setTitle(task.title);
//     setDescription(task.description);
//     setDueDate(task.dueDate);
//     setPriority(task.priority);
//   }, [task]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const updatedTask = {
//       id: task.id,
//       title,
//       description,
//       dueDate,
//       priority,
//     };
//     updateTask(updatedTask);
//     onClose();
//   };

//   return (
//     <div className="edit-task-form">
//       <form onSubmit={handleSubmit}>
//         {/* Form fields */}
//         <button type="submit">Save</button>
//         <button type="button" onClick={onClose}>
//           Cancel
//         </button>
//       </form>
//     </div>
//   );
// };

// export default EditTaskForm;

// import React from "react";
// import { useTaskContext } from "../contexts/TaskContext";

// const EditTaskForm = () => {
//   const { updateTask } = useTaskContext(); // Ensure this is correct
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Call updateTask with the updated task data
//   };

//   return <form onSubmit={handleSubmit}>{/* Your form fields here */}</form>;
// };

// export default EditTaskForm;

//src / components / edittaskform.js;
// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// const EditTaskForm = () => {
//   const { taskId } = useParams();
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [dueDate, setDueDate] = useState("");
//   const [priority, setPriority] = useState("");
//   const [category, setCategory] = useState("");

//   useEffect(() => {
//     // Fetch task data based on taskId and populate the form
//     const fetchTaskData = async () => {
//       // Implement logic to fetch task data from the backend
//       const task = await fetchTask(taskId);
//       setTitle(task.title);
//       setDescription(task.description);
//       setDueDate(task.dueDate);
//       setPriority(task.priority);
//       setCategory(task.category);
//     };
//     fetchTaskData();
//   }, [taskId]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission and update the task
//   };

//   return (
//     <div className="edit-task-form">
//       <h2>Edit Task</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Title:
//           <input
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//           />
//         </label>
//         <label>
//           Description:
//           <textarea
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//           ></textarea>
//         </label>
//         <label>
//           Due Date:
//           <input
//             type="date"
//             value={dueDate}
//             onChange={(e) => setDueDate(e.target.value)}
//           />
//         </label>
//         <label>
//           Priority:
//           <select
//             value={priority}
//             onChange={(e) => setPriority(e.target.value)}
//           >
//             <option value="">Select Priority</option>
//             <option value="low">Low</option>
//             <option value="medium">Medium</option>
//             <option value="high">High</option>
//           </select>
//         </label>
//         <label>
//           Category:
//           <select
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//           >
//             <option value="">Select Category</option>
//             <option value="work">Work</option>
//             <option value="personal">Personal</option>
//             <option value="other">Other</option>
//           </select>
//         </label>
//         <button type="submit">Update</button>
//       </form>
//     </div>
//   );
// };

// export default EditTaskForm;


// src/components/edittaskform.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const EditTaskForm = () => {
  const { taskId } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("");
  const [category, setCategory] = useState("");

  // Simulate fetching task data
  const fetchTask = async (taskId) => {
    // Replace this with actual API call, e.g., fetch(`your-api-endpoint/${taskId}`)
    return {
      title: "Sample Task",
      description: "This is a sample task description.",
      dueDate: "2025-03-30",
      priority: "medium",
      category: "work",
    };
  };

  useEffect(() => {
    // Fetch task data based on taskId and populate the form
    const fetchTaskData = async () => {
      const task = await fetchTask(taskId);
      setTitle(task.title);
      setDescription(task.description);
      setDueDate(task.dueDate);
      setPriority(task.priority);
      setCategory(task.category);
    };
    fetchTaskData();
  }, [taskId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission and update the task
  };

  return (
    <div className="edit-task-form">
      <h2>Edit Task</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </label>
        <label>
          Due Date:
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </label>
        <label>
          Priority:
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="">Select Priority</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </label>
        <label>
          Category:
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select Category</option>
            <option value="work">Work</option>
            <option value="personal">Personal</option>
            <option value="other">Other</option>
          </select>
        </label>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditTaskForm;
