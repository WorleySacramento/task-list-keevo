import React, { useState } from "react";
import './App.css'
import tarefas from './db.json'
import Tasks from "./components/tasks/tasks";
import AddTask from "./components/addtasks/AddTasks";
import EditTask from "./components/ModalEdit/EditTask"
import { Modal } from '@mui/material'


const App = () => {
  const [tasks, setTasks] = useState(tarefas.tarefas);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [openEditModal, setOpenEditModal] = useState(false); // Estado para controlar a abertura e fechamento do modal

  const handleTaskAdd = (title, description) => {
    const newTask = {
      id: Math.random().toString(),
      title: title,
      description: description,
      complete: false,
      inProgress: false
    };
    setTasks([...tasks, newTask]);
  };


  const handleRemoveTask = (taskId) => {
    const newTask = tasks.filter(task => task.id !== taskId);
    setTasks(newTask);
    setCompletedTasks(completedTasks.filter(task => task.id !== taskId));
  };

  const handleTaskState = (taskId) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          task.complete = !task.complete; // Atualiza o estado da tarefa como completa
          if (task.complete) {
            // Move a tarefa para a lista de tarefas finalizadas
            setCompletedTasks([...completedTasks, task]);
          } else {
            // Remove a tarefa da lista de tarefas finalizadas
            setCompletedTasks(completedTasks.filter((t) => t.id !== taskId));
          }
        }
        return task;
      })
    );
  };


  const handleTaskInProgress = (taskId) => {
    setTasks(tasks.map((task) => {
      if (task.id === taskId) {
        task.inProgress = !task.inProgress;
      }
      return task;
    }));
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
    setEditingTask(null);
    setOpenEditModal(false);
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
            <h2>Tarefas Adicionadas</h2>
            <div className="content">

              <Tasks
                //tarefas não em andamento e não completas
                tasks={tasks.filter((task) => !task.inProgress && !task.complete)}
                handleTaskState={handleTaskState}
                handleRemoveTask={handleRemoveTask}
                handleEditTask={handleEditTask}
                handleOpenEditModal={handleOpenEditModal}
                handleTaskInProgress={handleTaskInProgress}
              />
            </div>

          </div>

          <div className="column">
            <h2>Em Andamento</h2>
            <div className="content">
              <Tasks
                // tarefas em andamento e não completas
                tasks={tasks.filter((task) => task.inProgress && !task.complete)}
                handleTaskState={handleTaskState}
                handleRemoveTask={handleRemoveTask}
                handleOpenEditModal={handleOpenEditModal}
                handleTaskInProgress={handleTaskInProgress}
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
                handleOpenEditModal={handleOpenEditModal}
                handleTaskInProgress={handleTaskInProgress}
              />
            </div>
          </div>
        </div>

        <Modal open={openEditModal}
          onClose={handleCloseEditModal}>
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
