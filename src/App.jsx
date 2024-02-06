import React, { useState } from "react";
import './App.css'
import tarefas from './db.json'
import Tasks from "./components/tasks/tasks";
import AddTask from "./components/addtasks/AddTasks";
const App = () => {
  const [tasks, setTasks]  = useState(tarefas.tarefas )

  const handleTaskAdd = (taskTitle) =>{
const newTask = [...tasks, {

  id:Math.random(20),
  titulo: taskTitle,
  // descrição: description,
  estado: false
  
}
]
setTasks(newTask)
  }


  return ( 
    <div 
    // className="wrapper"
    >
      <div
      //  className="container"
       >


      {/* <ListItem task={tasks}/> */}
      <AddTask handleTaskAdd={handleTaskAdd}/>
      <Tasks tasks={tasks}/>
 
     </div>
    </div>
   );
}
 
export default App;