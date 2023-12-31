import React from "react";
import './information.css'

function Information() {
    const [number, setNumber] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [description, setDescription] = React.useState('');

    return (
        <div className="information">
            <form>
                <input type="text" onChange={(e)=>setNumber(e.target.value)} value={number} placeholder="Número" required />
                <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email} placeholder="ejemplo@ejemplo.com" required />
                <textarea onChange={(e)=>setDescription(e.target.value)} value={description} placeholder="Descripción" required />
            </form>
        </div>
    );
}

export default Information;