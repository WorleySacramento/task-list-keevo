import React, { useState } from 'react'
import './addtasks.css'
import Button from '../Button/button';
import { AddCircleOutline } from '@mui/icons-material';
import { TextField,IconButton } from '@mui/material';

const AddTask = ({ handleTaskAdd }) => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const handleChangeTitle = (e) => {
    setTaskTitle(e.target.value);
  };

  const handleChangeDescription = (e) => {
    setTaskDescription(e.target.value);
  };

  const handleClickAddTask = () => {
    handleTaskAdd(taskTitle, taskDescription);
    setTaskTitle('');
    setTaskDescription('');
  };

  return (
    <div className='addContainer'>
      <div className='inputFields'>
        {/* <h3 className='header'>Nova Tarefa</h3> */}
        <div className='addInputTitle'>
          <input
            placeholder='Titulo'
            type='text'
            onChange={handleChangeTitle}
            value={taskTitle}
          />
        </div>
        <div className='addInputDescription'>
          <input
            placeholder="Descrição da Tarefa"            
            value={taskDescription}
            onChange={handleChangeDescription}
          />
        </div>
      </div>
      <div className='buttonContainer'>
        <IconButton onClick={handleClickAddTask}>
          <AddCircleOutline />
        </IconButton>
      </div>
    </div>
  );
};


export default AddTask;