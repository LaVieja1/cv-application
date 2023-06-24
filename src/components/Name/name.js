import React from "react";
import './name.css';

function Name(){
    const [name, setName] = React.useState('');

    return (
        <div className="name">
            <form>
                <input type="text" onChange={(e)=>setName(e.target.value)} value={name} placeholder="Nombre" required/>
            </form>
        </div>
    )
}

export default Name;