import React, { useState } from 'react';
import './edittask.css'

const EditTask = ({ task, handleEditTask, handleCloseEditModal }) => {
    const [newTitle, setNewTitle] = useState(task.title);
    const [newDescription, setNewDescription] = useState(task.description);

    const handleSaveEdit = () => {
        handleEditTask(task.id, newTitle, newDescription);
    };

    return (
        <div className='wrapperModal'>
            <div className="containerModal">
                <div className="modal">
                    <div>

                        <input
                            type="text"
                            value={newTitle}
                            onChange={(e) => setNewTitle(e.target.value)}
                        />
                    </div>
                    <div>
                        <textarea
                            cols={50}
                            rows={5}
                            maxLength={100}
                            type="text"
                            value={newDescription}
                            onChange={(e) => setNewDescription(e.target.value)}
                        />

                    </div>
                    <div className='btnmodal'>
                        <button onClick={handleSaveEdit}>Salvar</button>
                        <button onClick={handleCloseEditModal}>Cancelar</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditTask;
