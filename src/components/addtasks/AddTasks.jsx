import React, { useState } from 'react'
import './addtasks.css'
import { AddCircleOutline } from '@mui/icons-material';
import { IconButton } from '@mui/material';

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
              cols={50}
              rows={5}
              maxLength={100}
              required={
                taskDescription

              }
            />
          </div>
        </div>
        <div className='buttonContainer'>
          <IconButton className='button' type='submit' onClick={handleClickAddTask}>
            <AddCircleOutline />
          </IconButton>
        </div>
      </form>
    </div>
  );
};


export default AddTask;