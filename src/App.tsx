import React, { type FC, useState } from "react";
import type { ITask } from "./Interfaces";

import "./App.css";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todo, setTodo] = useState<ITask[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === task) {
      setTask(e.target.value);
    } else if (e.target.name === "deadline") {
      setDeadline(Number(e.target.value));
    }
  };

  const addTask = (): void => {


  }

  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input
            type="text"
            placeholder="Task..."
            name="task"
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Deadline (in Days)..."
            onChange={handleChange}
            name="deadline"
          />
        </div>
        <button className="" onClick={addTask}>Add Task</button>
      </div>
      <div className="todoList"></div>
    </div>
  );
};

export default App;
