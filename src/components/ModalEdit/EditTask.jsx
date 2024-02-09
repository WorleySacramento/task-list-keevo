import React, { useState } from 'react';

const EditTask = ({ task, handleEditTask, handleCloseEditModal }) => {
    const [newTitle, setNewTitle] = useState(task.title);
    const [newDescription, setNewDescription] = useState(task.description);

    const handleSaveEdit = () => {
        handleEditTask(task.id, newTitle, newDescription);
    };

    return (
        <div className="edit-modal">
            <input
                type="text"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
            />
            <input
                type="text"
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
            />
            <button onClick={handleSaveEdit}>Salvar</button>
            <button onClick={handleCloseEditModal}>Cancelar</button>
        </div>
    );
};

export default EditTask;
