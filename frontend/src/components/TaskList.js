// import React from "react";
// //import TaskItem from "./TaskItem";

// const TaskList = ({ tasks, onView, onEdit, onDelete }) => {
//   return (
//     <div className="task-list">
//       {tasks.map((task) => (
//         <TaskList
//           key={task.id}
//           task={task}
//           onView={onView}
//           onEdit={onEdit}
//           onDelete={onDelete}
//         />
//       ))}
//     </div>
//   );
// };

// export default TaskList;

// import React from "react";
// import TaskItem from "./TaskItem";

// const TaskList = ({ tasks }) => {
//   return (
//     <div>
//       {tasks && tasks.length > 0 ? (
//         tasks.map((task) => <TaskItem key={task.id} task={task} />)
//       ) : (
//         <p>No tasks available</p>
//       )}
//     </div>
//   );
// };

// export default TaskList;

import React from "react";
import TaskItem from "./TaskItem";
import { Container } from "react-bootstrap";

const TaskList = ({ tasks }) => {
  return (
    <Container>
      <h2 className="mb-4">Task List</h2>
      {tasks && tasks.length > 0 ? (
        tasks.map((task) => <TaskItem key={task.id} task={task} />)
      ) : (
        <p>No tasks available</p>
      )}
    </Container>
  );
};

export default TaskList;