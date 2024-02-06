import React, { useState } from 'react'
import './addtasks.css'
import Button from '../Button/button';

const AddTask = ({handleTaskAdd}) => {
const [inputAdd, setInputAdd] = useState('')

const handleChange = (e) => {
    console.log(e.target.value,'aqui')
    setInputAdd(e.target.value)
}

const handleClickAddTask = (e) => {
    handleTaskAdd(inputAdd)
}

    return (
        <div className='addContainer'>
            <input className='addInput' type='text' onChange={handleChange} value={inputAdd}/>
            <div className='buttonContainer'>
          <Button onClick={handleClickAddTask}>
                Adicionar
            </Button>
            </div>
        </div>

    );
}

export default AddTask;