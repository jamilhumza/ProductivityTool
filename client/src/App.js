import React, { Fragment } from "react";
import "./App.css";
import InputTask from "./components/InputTask";
import Studytimer from "./components/Studytimer";
import TaskList from "./components/TaskList";

function App() {
  return (
    <Fragment>
      <h1 class="header">Study Monitor</h1>
      <div class="card container bg">
        <div class="container">
          <InputTask />
          <TaskList />
        </div>
      </div>
      <div class="timercard timercontainer bg">
        <div class="timercontainer">
          <Studytimer />
        </div>
      </div>
    </Fragment>
  );
}

export default App;
