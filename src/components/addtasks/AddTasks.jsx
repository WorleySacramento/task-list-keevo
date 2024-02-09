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
      <form>
      <div className='inputFields'>
        <div className='addInputTitle'>
          <input
            placeholder='Titulo'
            type='text'
            onChange={handleChangeTitle}
            value={taskTitle}
            required
          />
        </div>
        <div className='addInputDescription'>
          <textarea
            placeholder="Descrição da Tarefa"            
            value={taskDescription}
            onChange={handleChangeDescription}
            rows={2}
            cols={10}
          />
        </div>
      </div>
      <div className='buttonContainer'>
        <IconButton type='submit' onClick={handleClickAddTask}>
          <AddCircleOutline />
        </IconButton>
      </div>
      </form>
    </div>
  );
};


export default AddTask;