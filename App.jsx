import React, { useState } from "react"
import {v4 as uuidv4} from 'uuid'
import Tasks from "./components/Tasks"
import "./App.css"
import AddTask from "./components/AddTask"
import Header from "./components/Header"


const App = () =>{

  const[tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar programação',
      completed: false,
    },
    {
      id: '2',
      title:'Ler livros',
      completed: true,
    },
  ])
  const handleTaskClick = (taskId) => {
    const newTask = tasks.map((task) =>{
      if(task.id === taskId)
        return {...task, completed: !task.completed }

        return task
    })
    setTasks(newTask)
  }
  const handleTaskAddition = (taskTitle) =>{
    const newTasks = [
      ...tasks,
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
      },
    ];
    setTasks(newTasks);
  };
  const handleTaskDelete = (taskId) => {
    const newTask = tasks.filter(task => task.id !== taskId)

    setTasks(newTask)
  }
  return (

      <div className="container">
        <Header />
        
        <AddTask handleTaskAddition={handleTaskAddition} />
        <Tasks tasks={tasks}
        handleTaskClick={handleTaskClick}
        handleTaskDelete={handleTaskDelete}/>
      </div> 
  )
  
}
export default App;
