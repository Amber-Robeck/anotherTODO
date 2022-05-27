import React from 'react';
import './App.css';
import UserInput from './components/UserInput/UserInput';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="header">Always Be Coding</header>
      <UserInput />
    </div>
  );
};

export default App;
