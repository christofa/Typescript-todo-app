import React, { type FC, useState } from "react";
import type { ITask } from "./Interfaces";
import TodoTask from "./Components/TodoTask";

import "./App.css";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todo, setTodo] = useState<ITask[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === "task") {
      setTask(e.target.value);
    } else {
      setDeadline(Number(e.target.value));
    }
  };

  const addTask = (): void => {
    const newTask: ITask = {
      taskName: task,
      deadline: deadline,
    };
    setTodo([...todo, newTask]);
    setTask("");
    setDeadline(0);
  };

  const completeTask = (taskNameToDelete: string): void => {
    setTodo(
      todo.filter((task) => {
        return task.taskName !== taskNameToDelete;
      })
    );
  };

  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input
            type="text"
            placeholder="Task..."
            name="task"
            value={task}
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Deadline (in Days)..."
            onChange={handleChange}
            name="deadline"
            value={deadline}
          />
        </div>
        <button className="" onClick={addTask}>
          Add Task
        </button>
      </div>
      <div className="todoList">
        {todo.map((task: ITask, index: number) => (
          <TodoTask key={index} task={task} completeTask={completeTask} />
        ))}
      </div>
    </div>
  );
};

export default App;
