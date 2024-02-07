import React, { useState } from "react";
import './App.css'
import tarefas from './db.json'
import Tasks from "./components/tasks/tasks";
import AddTask from "./components/addtasks/AddTasks";
import EditTask from "./components/ModalEdit/EditTask"
import {Modal} from '@mui/material'


const App = () => {
  // const [tasks, setTasks] = useState(tarefas.tarefas)
  // const [completedTasks, setCompletedTasks] = useState([]);

  // const handleTaskAdd = (title, description) => {
  //   const newTask = [...tasks, {
  //     id: Math.random().toString(),
  //     title: title,
  //     description: description,
  //     complete: false
  //   }];
  //   setTasks(newTask);
  // };

  // const handleRemoveTask = (taskId) => {
  //   const newTask = tasks.filter(task => task.id !== taskId);
  //   setTasks(newTask);
  //   setCompletedTasks(completedTasks.filter(task => task.id !== taskId));
  // };

  // const handleTaskState = (taskId) => {
  //   const updatedTasks = tasks.map(task => {
  //     if (task.id === taskId) {
  //       task.complete = !task.complete;
  //       if (task.complete) {
  //         setCompletedTasks([...completedTasks, task]);
  //         return null; // Remove da lista de tarefas
  //       }
  //     }
  //     return task;
  //   }).filter(Boolean); // Remove elementos nulos
  //   setTasks(updatedTasks);
  // };

  // const handleTaskEdit = (taskId, newTitle, newDescription) => {
  //   const newTasks = tasks.map(task => {
  //     if (task.id === taskId) {
  //       return { ...task, title: newTitle, description: newDescription };
  //     }
  //     return task;
  //   });
  //   setTasks(newTasks);
  // };

  const [tasks, setTasks] = useState(tarefas.tarefas);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [openEditModal, setOpenEditModal] = useState(false); // Estado para controlar a abertura e fechamento do modal

  const handleTaskAdd = (title, description) => {
    const newTask = [...tasks, {
      id: Math.random().toString(),
      title: title,
      description: description,
      complete: false
    }];
    setTasks(newTask);
  };

  const handleRemoveTask = (taskId) => {
    const newTask = tasks.filter(task => task.id !== taskId);
    setTasks(newTask);
    setCompletedTasks(completedTasks.filter(task => task.id !== taskId));
  };

  const handleTaskState = (taskId) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        task.complete = !task.complete;
        if (task.complete) {
          setCompletedTasks([...completedTasks, task]);
          return null; // Remove da lista de tarefas
        }
      }
      return task;
    }).filter(Boolean); // Remove elementos nulos
    setTasks(updatedTasks);
  };

  const handleEditTask = (taskId, newTitle, newDescription) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        task.title = newTitle;
        task.description = newDescription;
      }
      return task;
    });
    setTasks(updatedTasks);
    setEditingTask(null); // Fechar modal de edição
    setOpenEditModal(false); // Fechar o modal usando o estado
  };

  const handleOpenEditModal = (task) => {
    setEditingTask(task);
    setOpenEditModal(true); // Abrir o modal usando o estado
  };

  const handleCloseEditModal = () => {
    setEditingTask(null);
    setOpenEditModal(false); // Fechar o modal usando o estado
  };

  return (
    <div
      className="wrapper"
    >
      <div
        className="container"
      >
        <div className="addTask">
          <div className="titleAddTask">
          <h2> Adicionar Tarefa</h2>
          </div>

          <AddTask
            handleTaskAdd={handleTaskAdd}
          />
        </div>

        <div className="tasks">
          <div className="column">
            <h2>Tarefas</h2>
            <div className="content">

              <Tasks tasks={tasks}
                handleTaskState={handleTaskState}
                handleRemoveTask={handleRemoveTask}
                handleEditTask={handleEditTask}
                handleOpenEditModal={handleOpenEditModal}
              />
            </div>

          </div>
          <div className="column">
            <h2>Finalizadas</h2>
            <div className="content">
            <Tasks 
                tasks={completedTasks}
                handleTaskState={handleTaskState}
                handleRemoveTask={handleRemoveTask}
                // handleTaskEdit={handleTaskEdit}
                handleOpenEditModal={handleOpenEditModal}
              />
            </div>
          </div>
        </div>

      <Modal open={openEditModal}
      onClose={handleCloseEditModal}

      >
        <EditTask
          task={editingTask}
          handleEditTask={handleEditTask}
          handleCloseEditModal={handleCloseEditModal}
          />
          </Modal>
    

      </div>
    </div>
  );
}

export default App;