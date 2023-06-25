import React from "react";
import './area.css';

function Area() {
    const [name, setName] = React.useState('');

    function handleOnChangeInput(e) {
        setName(e.target.value);
    };

    return (
        <div className="area">
            <form className="content-form">
                <input type="text" onChange={handleOnChangeInput} value={name} placeholder="Dirección" required />
            </form>
        </div>
    );
}

export default Area;