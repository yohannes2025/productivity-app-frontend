import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { TaskProvider } from "./Context/TaskContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import Profile from "./Pages/Profile";
import { Container } from "react-bootstrap";
import "./App.css";
import SearchBar from './components/SearchBar';


const App = () => {
  return (
    <Router>
      <TaskProvider>
        <div className="app"> 
          <Header />
          <Switch>
            {/* <Route path="/profile" component={Profile} /> */}
            <SearchBar />
          </Switch>
          <Footer />
        </div>
      </TaskProvider>
    </Router>
  );
};

export default App;

