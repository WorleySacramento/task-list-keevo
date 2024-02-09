import './listitem.css'
import { Card, CardContent, CardHeader, IconButton, CardActions } from '@mui/material'
import { DeleteOutline, Edit } from "@mui/icons-material";
import Checkbox from '@mui/material/Checkbox';
import Switch from '@mui/material/Switch';



const ListItem = ({ task, handleTaskState, handleRemoveTask, handleEditTask, handleOpenEditModal, handleTaskInProgress, handleFinished }) => {
    return (
        <Card className="card"
            style={task.complete ? { background: '#7fff7f', borderColor: "#4caf20", color: '#404040', borderStyle: "solid" } :
                (task.inProgress ? { background: '#FFFF00', borderColor: "#FFD700", color: '#404040', borderStyle: "solid" } : {})}>
            <CardHeader className="title" title={<span>{task.title}</span>} />
            <CardContent className="containerItem">
                <span>{task.description}</span>
                <span>{task.complete}</span>
            </CardContent>
            <CardActions className="buttons">
                {task.inProgress ? (
                    <Switch checked={task.complete} onChange={() => handleTaskState(task.id)} />
                ) : (
                    <Checkbox checked={task.inProgress} onChange={() => handleTaskInProgress(task.id)} />
                )}
                <IconButton onClick={() => handleOpenEditModal(task)}>
                    <Edit color="info" />
                </IconButton>
                <IconButton onClick={() => handleRemoveTask(task.id)}><DeleteOutline color="error" /></IconButton>
            </CardActions>
        </Card>
    );
}

export default ListItem;
