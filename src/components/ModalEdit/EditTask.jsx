import React from "react";
import ListItem from "../listitem/listItem";

const EditTask = ({editingTask, handleTaskState, handleRemoveTask, handleEditTask}) => {
    return ( 
        <div style={{height:300}}>
        { editingTask && (
            <div>
            <ListItem task={editingTask}  
            handleTaskState={handleTaskState} 
            handleRemoveTask={handleRemoveTask} 
            handleEditTask={handleEditTask} // Adicione esta linha
            />
            </div>
            )}
        </div>
     );
}
 
export default EditTask;