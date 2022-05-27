import React, { useState } from 'react';
import './App.css';
import UserInput from './components/UserInput/UserInput';

const App: React.FC = () => {
  const [task, setTask] = useState<string>("")
  console.log(task)
  return (
    <div className="App">
      <header className="header">Always Be Coding</header>
      <UserInput task={task} setTask={setTask} />
    </div>
  );
};

export default App;
