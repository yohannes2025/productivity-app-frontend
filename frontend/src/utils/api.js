// const API_URL = process.env.REACT_APP_API_URL;

// export const fetchTasks = async () => {
//   const response = await fetch(`${API_URL}/tasks`);
//   const data = await response.json();
//   return data;
// };

// export const fetchUser = async () => {
//   const response = await fetch(`${API_URL}/user`);
//   const data = await response.json();
//   return data;
// };



// export const getTasks = async () => {
//   // Implement the logic to fetch tasks from an API
//   // and return the tasks as an array
//   return [
//     {
//       id: 1,
//       title: "Task 1",
//       description: "Description for Task 1",
//       dueDate: "2023-05-01",
//       priority: "high",
//     },
//     {
//       id: 2,
//       title: "Task 2",
//       description: "Description for Task 2",
//       dueDate: "2023-05-15",
//       priority: "medium",
//     },
//     // Add more tasks as needed
//   ];
// };

// export const updateTask = async (updatedTask) => {
//   // Implement the logic to update a task in the API
//   // and return the updated task
//   return updatedTask;
// };

//src/utils/api.js
const API_URL = process.env.REACT_APP_API_URL;

export const fetchTasks = async () => {
  const response = await fetch(`${API_URL}/tasks`);
  const data = await response.json();
  return data;
};

export const fetchUser = async () => {
  const response = await fetch(`${API_URL}/user`);
  const data = await response.json();
  return data;
};
