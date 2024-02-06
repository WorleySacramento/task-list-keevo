import React from "react";
import ListItem from "../listitem/listItem";

const Tasks = ({tasks}) => {
    console.log(tasks);
    return ( 
        <>
        { tasks?.map((task) =>( 
            <ListItem task={task}/>
            ))}
        </>
     );
}
 
export default Tasks;