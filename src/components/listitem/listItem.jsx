import { useState } from "react";
import './listitem.css'



const ListItem = ({task}) => {
    return (
        <div className="containerItem">
            <h2>{task.titulo}</h2>
            <p>{task.descrição}</p>
            <p>{task.estado}</p>
        </div>
    );
}

 
export default ListItem;


{/* <div className="containeritem">

<div>
<h2 className="text-xl font-semibold">ListItem Title</h2>
</div>
    <div></div>
<div>
<button>mudar msg</button>
</div>

</div> */}