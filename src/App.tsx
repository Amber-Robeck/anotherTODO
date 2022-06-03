import React, { useState, useEffect } from 'react';
import './App.css';
import UserInput from './components/UserInput/UserInput';
import { Task } from './components/Task';
import TaskList from './components/TaskList/TaskList';
import { DragDropContext, DropResult } from 'react-beautiful-dnd'
//leaving here for reference, installing packages left error of 'npm err peer react@ ...
// npm install your-packages --legacy-peer-deps

const App: React.FC = () => {

  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [completedTask, setCompletedTask] = useState<Task[]>([]);
  // console.log(completedTask)

  const handleTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (task) {
      setTasks([...tasks, { id: Date.now(), task, isCompleted: false }]);
      setTask("");
    }
  };

  useEffect(() => {
    const localTask = localStorage.getItem("taskList");
    if (localTask) {
      setTasks(JSON.parse(localTask));
    }
  }, []);

  // useEffect(() => {
  //   const localCompletedTask = localStorage.getItem("completedTaskList");
  //   if (localCompletedTask) {
  //     setCompletedTask(JSON.parse(localCompletedTask));
  //     // console.log(localCompletedTask);
  //     // console.log("completed", completedTask)
  //   }
  // }, []);

  useEffect(() => {
    localStorage.setItem('taskList', JSON.stringify(tasks));
    // localStorage.setItem('completedTaskList', JSON.stringify(completedTask));
  }, [tasks]);

  // useEffect(() => {
  //   if (completedTask) {
  //     localStorage.setItem('completedTaskList', JSON.stringify(completedTask));
  //     console.log("completed2", completedTask)
  //   }
  // }, [completedTask]);

  const onDragEnd = (result: DropResult) => {
    // console.log(result)
    const { source, destination } = result;
    //if dropped out of droppable
    if (!destination) return;
    //if dropped at the same location
    if (destination.droppableId === source.droppableId && destination.index === source.index) return;

    let move, active = tasks, complete = completedTask;

    //if droppable 1 move to active else move to completed list '2'
    if (source.droppableId === '1') {
      move = active[source.index];
      active.splice(source.index, 1);
    } else {
      move = complete[source.index];
      complete.splice(source.index, 1);
    }

    if (destination.droppableId === '1') {
      active.splice(destination.index, 0, move);
    } else {
      complete.splice(destination.index, 0, move);
    }

    setCompletedTask(complete);
    // console.log(complete)
    setTasks(active);
  };
  // console.log(task)
  // console.log(tasks)
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
