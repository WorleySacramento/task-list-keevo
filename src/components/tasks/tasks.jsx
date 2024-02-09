import React from "react";
import ListItem from "../listitem/listItem";

const Tasks = ({tasks, handleTaskState, handleRemoveTask, handleTaskEdit, handleEditTask, handleOpenEditModal, handleTaskInProgress}) => {
    console.log(tasks);
    return ( 
        <div style={{height:300}}>
        { tasks?.map((task) =>( 
            <div key={task.id}>
            <ListItem 
            task={task}  
            handleTaskState={handleTaskState} 
            handleRemoveTask={handleRemoveTask} 
            handleEditTask={handleEditTask} // Adicione esta linha
            handleOpenEditModal={handleOpenEditModal}
            handleTaskInProgress={handleTaskInProgress}
            />
            </div>
            ))}
        </div>
     );
}
 
export default Tasks;