import React from 'react';
import './App.css';
import TaskList from './components/TaskList';

const TASKS = [
  {
    id: 1,
    text: 'Mow the lawn',
    done: false,
  },
  {
    id: 2,
    text: 'Cook Pasta',
    done: true,
  },
];

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>
          <TaskList tasks={TASKS}></TaskList>
          {/* <Task id={TASKS[0].id} text={TASKS[0].text} done={TASKS[0].done} /> */}
        </div>
      </main>
    </div>
  );
};

export default App;
