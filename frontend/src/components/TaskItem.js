// import React from "react";
// import { Link } from "react-router-dom";

// const TaskItem = ({ task }) => {
//   return (
//     <div className="task-item">
//       <div className="task-details">
//         <h3>{task.title}</h3>
//         <p>Owner: {task.owner}</p>
//         <p>Due Date: {task.dueDate}</p>
//         <p>Priority: {task.priority}</p>
//       </div>
//       <div className="task-actions">
//         <Link to={`/tasks/${task.id}`}>View</Link>
//         <Link to={`/tasks/${task.id}/edit`}>Edit</Link>
//         <button>Delete</button>
//       </div>
//     </div>
//   );
// };

// export default TaskItem;

// import React from "react";
// import { Button, Row, Col } from "react-bootstrap";

// const TaskItem = ({ task }) => {
//   return (
//     <div className="border p-3 mb-3">
//       <Row>
//         <Col xs={8}>
//           <h5>{task.title}</h5>
//           <div>
//             <strong>Owner:</strong> {task.owner} &nbsp;
//             <strong>Due Date:</strong>{" "}
//             {new Date(task.dueDate).toLocaleDateString()} &nbsp;
//             <strong>Priority:</strong> {task.priority}
//           </div>
//         </Col>
//         <Col xs={4} className="text-end">
//           <Button variant="primary" className="me-2">
//             View
//           </Button>
//           <Button variant="warning" className="me-2">
//             Edit
//           </Button>
//           <Button variant="danger">Delete</Button>
//         </Col>
//       </Row>
//     </div>
//   );
// };

// export default TaskItem;

// import React, { useState } from "react";
// import { Button, Row, Col, Form } from "react-bootstrap";

// const TaskItem = ({ task }) => {
//   // Local state to handle form input changes
//   const [editMode, setEditMode] = useState(false);
//   const [formData, setFormData] = useState({
//     title: task.title,
//     owner: task.owner,
//     dueDate: task.dueDate
//       ? new Date(task.dueDate).toISOString().split("T")[0]
//       : "", // Ensure we safely handle undefined
//     priority: task.priority,
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleEdit = () => {
//     // Logic to save the updated task can be implemented here
//     console.log("Updated Task:", formData);
//     setEditMode(false); // Exit edit mode after saving
//   };

//   return (
//     <div className="border p-3 mb-3">
//       <Row>
//         <Col xs={8}>
//           {editMode ? (
//             <Form>
//               <Form.Group>
//                 <Form.Label>Title</Form.Label>
//                 <Form.Control
//                   type="text"
//                   name="title"
//                   value={formData.title}
//                   onChange={handleChange}
//                 />
//               </Form.Group> 
//               <Form.Group>
//                 <Form.Label>Owner</Form.Label>
//                 <Form.Control
//                   type="text"
//                   name="owner"
//                   value={formData.owner}
//                   onChange={handleChange}
//                 />
//               </Form.Group>
//               <Form.Group>
//                 <Form.Label>Due Date</Form.Label>
//                 <Form.Control
//                   type="date"
//                   name="dueDate"
//                   value={formData.dueDate}
//                   onChange={handleChange}
//                 />
//               </Form.Group>
//               <Form.Group>
//                 <Form.Label>Priority</Form.Label>
//                 <Form.Control
//                   type="text"
//                   name="priority"
//                   value={formData.priority}
//                   onChange={handleChange}
//                 />
//               </Form.Group>
//             </Form>
//           ) : (
//             <>
//               <h5>{task.title}</h5>
//               <div>
//                 <strong>Owner:</strong> {task.owner} &nbsp;
//                 <strong>Due Date:</strong>{" "}
//                 {task.dueDate
//                   ? new Date(task.dueDate).toLocaleDateString()
//                   : "N/A"}{" "}
//                 &nbsp;
//                 <strong>Priority:</strong> {task.priority}
//               </div>
//             </>
//           )}
//         </Col>
//         <Col xs={4} className="text-end">
//           {editMode ? (
//             <>
//               <Button variant="success" className="me-2" onClick={handleEdit}>
//                 Save
//               </Button>
//               <Button variant="secondary" onClick={() => setEditMode(false)}>
//                 Cancel
//               </Button>
//             </>
//           ) : (
//             <>
//               <Button variant="primary" className="me-2">
//                 View
//               </Button>
//               <Button
//                 variant="warning"
//                 className="me-2"
//                 onClick={() => setEditMode(true)}
//               >
//                 Edit
//               </Button>
//               <Button variant="danger">Delete</Button>
//             </>
//           )}
//         </Col>
//       </Row>
//     </div>
//   );
// };

// export default TaskItem;

// import React, { useState } from "react";
// import { Button, Row, Col, Form } from "react-bootstrap";

// const TaskItem = ({ task }) => {
//   // Check if task is provided
//   if (!task) {
//     return <div>Loading...</div>; // or handle it however necessary
//   }

//   const [editMode, setEditMode] = useState(false);
//   const [formData, setFormData] = useState({
//     title: task.title || "",
//     owner: task.owner || "",
//     dueDate: task.dueDate
//       ? new Date(task.dueDate).toISOString().split("T")[0]
//       : "",
//     priority: task.priority || "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleEdit = () => {
//     // Logic to save the updated task can be implemented here
//     console.log("Updated Task:", formData);
//     setEditMode(false); // Exit edit mode after saving
//   };

//   return (
//     <div className="border p-3 mb-3">
//       <Row>
//         <Col xs={8}>
//           {editMode ? (
//             <Form>
//               <Form.Group>
//                 <Form.Label>Title</Form.Label>
//                 <Form.Control
//                   type="text"
//                   name="title"
//                   value={formData.title}
//                   onChange={handleChange}
//                 />
//               </Form.Group>
//               <Form.Group>
//                 <Form.Label>Owner</Form.Label>
//                 <Form.Control
//                   type="text"
//                   name="owner"
//                   value={formData.owner}
//                   onChange={handleChange}
//                 />
//               </Form.Group>
//               <Form.Group>
//                 <Form.Label>Due Date</Form.Label>
//                 <Form.Control
//                   type="date"
//                   name="dueDate"
//                   value={formData.dueDate}
//                   onChange={handleChange}
//                 />
//               </Form.Group>
//               <Form.Group>
//                 <Form.Label>Priority</Form.Label>
//                 <Form.Control
//                   type="text"
//                   name="priority"
//                   value={formData.priority}
//                   onChange={handleChange}
//                 />
//               </Form.Group>
//             </Form>
//           ) : (
//             <>
//               <h5>{task.title}</h5>
//               <div>
//                 <strong>Owner:</strong> {task.owner || "N/A"} &nbsp;
//                 <strong>Due Date:</strong>{" "}
//                 {task.dueDate
//                   ? new Date(task.dueDate).toLocaleDateString()
//                   : "N/A"}{" "}
//                 &nbsp;
//                 <strong>Priority:</strong> {task.priority || "N/A"}
//               </div>
//             </>
//           )}
//         </Col>
//         <Col xs={4} className="text-end">
//           {editMode ? (
//             <>
//               <Button variant="success" className="me-2" onClick={handleEdit}>
//                 Save
//               </Button>
//               <Button variant="secondary" onClick={() => setEditMode(false)}>
//                 Cancel
//               </Button>
//             </>
//           ) : (
//             <>
//               <Button variant="primary" className="me-2">
//                 View
//               </Button>
//               <Button
//                 variant="warning"
//                 className="me-2"
//                 onClick={() => setEditMode(true)}
//               >
//                 Edit
//               </Button>
//               <Button variant="danger">Delete</Button>
//             </>
//           )}
//         </Col>
//       </Row>
//     </div>
//   );
// };

// export default TaskItem;

import React, { useState, useEffect } from "react";
import { Button, Row, Col, Form } from "react-bootstrap";

const TaskItem = ({ task }) => {
  // Always define formData with a default object
  const initialFormData = {
    title: task?.title || "", // Use optional chaining to avoid errors
    owner: task?.owner || "",
    dueDate: task?.dueDate
      ? new Date(task.dueDate).toISOString().split("T")[0]
      : "",
    priority: task?.priority || "",
  };

  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState(initialFormData);

  // Update formData whenever task prop changes
  useEffect(() => {
    setFormData(initialFormData);
  }, [task]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleEdit = () => {
    // Logic to save the updated task can be implemented here
    console.log("Updated Task:", formData);
    setEditMode(false); // Exit edit mode after saving
  };

  if (!task) {
    return <div>Loading...</div>; // Add a loading state or error handling
  }

  return (
    <div className="border p-3 mb-3">
      <Row>
        <Col xs={8}>
          {editMode ? (
            <Form>
              <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Owner</Form.Label>
                <Form.Control
                  type="text"
                  name="owner"
                  value={formData.owner}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Due Date</Form.Label>
                <Form.Control
                  type="date"
                  name="dueDate"
                  value={formData.dueDate}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Priority</Form.Label>
                <Form.Control
                  type="text"
                  name="priority"
                  value={formData.priority}
                  onChange={handleChange}
                />
              </Form.Group>
            </Form>
          ) : (
            <>
              <h5>{task.title}</h5>
              <div>
                <strong>Owner:</strong> {task.owner || "N/A"} &nbsp;
                <strong>Due Date:</strong>{" "}
                {task.dueDate
                  ? new Date(task.dueDate).toLocaleDateString()
                  : "N/A"}{" "}
                &nbsp;
                <strong>Priority:</strong> {task.priority || "N/A"}
              </div>
            </>
          )}
        </Col>
        <Col xs={4} className="text-end">
          {editMode ? (
            <>
              <Button variant="success" className="me-2" onClick={handleEdit}>
                Save
              </Button>
              <Button variant="secondary" onClick={() => setEditMode(false)}>
                Cancel
              </Button>
            </>
          ) : (
            <>
              <Button variant="primary" className="me-2">
                View
              </Button>
              <Button
                variant="warning"
                className="me-2"
                onClick={() => setEditMode(true)}
              >
                Edit
              </Button>
              <Button variant="danger">Delete</Button>
            </>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default TaskItem;