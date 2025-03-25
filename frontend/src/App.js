// //src/App.js

// import './App.css';
// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { TaskProvider } from "./contexts/TaskContext";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// // import Profile from "./Pages/Profile";
// import { Container } from "react-bootstrap";
// import "./App.css";
// import SearchBar from './components/SearchBar';
// import FilterPanel from './components/FilterPanel';
// import TaskList from "./components/TaskList";
// import TaskItem from "./components/TaskItem";
// import CreateTaskForm from "./components/CreateTaskForm"; 
// import EditTaskForm from './components/EditTaskForm';


// const App = () => {
//   const handleFilters = (filters) => {
//     console.log("Filters applied:", filters);
//     // Add your filtering logic here
//   };
//   const tasks = [
//     { id: 1, title: "Task 1" },
//     { id: 2, title: "Task 2" },
//   ];

//   const handleView = (task) => {
//     console.log("Viewing task:", task);
//   };

//   const handleEdit = (task) => {
//     console.log("Editing task:", task);
//   };

//   const handleDelete = (taskId) => {
//     console.log("Deleting task with id:", taskId);
//   };
//   return (
//     <Container>
//       <Router>
//         <Header />
//         <SearchBar />
//         <FilterPanel onFilter={handleFilters} />
//         <TaskList
//           tasks={tasks}
//           onView={handleView}
//           onEdit={handleEdit}
//           onDelete={handleDelete}
//         />
//         {/* <TaskItem /> */}
//         {/* <CreateTaskForm /> */}
//         <EditTaskForm />
//         {/* <Routes> */}

//         {/* <Route path="/" exact component={Home} />
//               <Route path="/login" component={Login} />
//               <Route path="/register" component={Register} />
//               <Route path="/profile" component={Profile} />
//               <Route path="/tasks" component={Tasks} />
//               <Route path="/task/:id" component={Task} />
//               <Route path="/create" component={CreateTask} />
//               <Route path="/edit/:id" component={EditTask} /> 
//               <Route path="/search" component={SearchBar} />
//               <Route path="/about" component={About} />
//               <Route path="/contact" component={Contact} /> */}
//         {/* </Routes> */}

//         <Footer />
//       </Router>
//     </Container>
//   );
// };

// export default App;


import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TaskContext, { TaskProvider } from "./contexts/TaskContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import SearchBar from "./components/SearchBar";
import FilterPanel from "./components/FilterPanel";
import TaskList from "./components/TaskList";
import EditTaskForm from "./components/EditTaskForm";
import CreateTaskForm from "./components/CreateTaskForm"
import TaskItem from "./components/TaskItem"
// import TaskContext from "./contexts/TaskContext";

const App = () => {
  return (
    <TaskProvider>
      <Container>
        <Router>
          <Header />
          <SearchBar />
          <FilterPanel />
          {/* <TaskItem /> */}
          <TaskList />
          <CreateTaskForm />
          {/* Assuming EditTaskForm is used here, ensure it gets the required context */}
          <EditTaskForm />
          {/* <TaskContext /> */}
          <Footer />
        </Router>
      </Container>
    </TaskProvider>
  );
};

export default App;