import React, { useState } from 'react';
import './App.css';
import UserInput from './components/UserInput/UserInput';
import { Task } from './components/Task';
import TaskList from './components/TaskList/TaskList';
import { DragDropContext, DropResult } from 'react-beautiful-dnd'

const App: React.FC = () => {

  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [completedTask, setCompletedTask] = useState<Task[]>([]);

  const handleTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (task) {
      setTasks([...tasks, { id: Date.now(), task, isCompleted: false }]);
      setTask("");
    }
  };

  const onDragEnd = (result: DropResult) => {
    console.log(result)
  };
  // console.log(task)
  console.log(tasks)
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <header className="header">Always Be Coding</header>
        <UserInput task={task} setTask={setTask} handleTask={handleTask} />
        <TaskList tasks={tasks} setTasks={setTasks} completedTask={completedTask} setCompletedTask={setCompletedTask} />
      </div>
    </DragDropContext>
  );
};

export default App;
