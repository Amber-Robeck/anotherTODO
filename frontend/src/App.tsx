import React, { useState } from 'react';
import './App.css';
import UserInput from './components/UserInput/UserInput';
import { Task } from './components/Task';

const App: React.FC = () => {

  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (task) {
      setTasks([...tasks, { id: Date.now(), task, isCompleted: false }]);
      setTask("");
    }
  };

  // console.log(task)
  // console.log(tasks)
  return (
    <div className="App">
      <header className="header">Always Be Coding</header>
      <UserInput task={task} setTask={setTask} handleTask={handleTask} />
    </div>
  );
};

export default App;
