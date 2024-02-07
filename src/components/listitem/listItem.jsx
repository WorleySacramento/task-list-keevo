import { useState } from "react";
import './listitem.css'
import { Card, CardContent, CardHeader, Button, IconButton, CardActions } from '@mui/material'
import { DeleteOutline, Edit } from "@mui/icons-material";
import Checkbox from '@mui/material/Checkbox';



const ListItem = ({ task, handleTaskState, handleRemoveTask, handleEditTask, handleOpenEdiModal }) => {
    return (
        <Card className="card" style={task.complete ? { background: '#7fff7f', borderColor: "#4caf20", color: '#404040', borderStyle: "solid" } : {}}>
            <CardHeader className="title" title={<span>{task.title}</span>} />
            <CardContent className="containerItem">
                <span>{task.description}</span>
                <span>{task.complete}</span>
            </CardContent>
            <CardActions className="buttons">
                <Checkbox
                    checked={task.complete}
                    onChange={() => handleTaskState(task.id)}
                />

                <IconButton onClick={() =>handleOpenEdiModal(task)}>
                    <Edit color="info"/>
                </IconButton>
                
                <IconButton onClick={() => handleRemoveTask(task.id)}><DeleteOutline color="error" /></IconButton>

            </CardActions>
        </Card>
    );
}


export default ListItem;
