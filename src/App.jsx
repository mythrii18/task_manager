import './App.css'
import TaskInput from './components/TaskInput';
import TaskList from './components/Task.List';
import { useState } from 'react';

function App() {
  const [tasks,setTasks] = useState([]);

  function addTask(text){
    const newTask ={id : Date.now(), text};

    setTasks((prev) => [newTask,...prev]);

  }
  function deleteTask(id){
    setTasks(prev => prev.filter(t => t.id !== id));
  }
  return(
    <div>
      <h1> Task Manager</h1>
      <TaskInput onAdd={addTask}/>
      <TaskList tasks={tasks} onDelete={deleteTask}/>
    </div>
  );

  
}

export default App;