import React from "react";
import { v4 as uuidv4 } from "uuid";

import './education.css';

function Education({activeButton}) {
    const [listEducation, setListEducation] = React.useState([
        {
            id: uuidv4(),
            degree: ''
        }
    ])

    function handleAddButton(e) {
        let concatList = listEducation.concat([
            {
                id: uuidv4(),
                degree: ''
            }
        ]);
        setListEducation(concatList)
    }

    function deleteEducationItem(id) {
        let aux = listEducation.filter(a => a.id !== id);
        setListEducation(aux);
    }

    return (
        <div className="education">
            <div className="content-headers">
                <h2>Educación</h2>
                {
                    activeButton?
                    <button onClick={handleAddButton}><i className="fas fa-plus"></i></button>:''
                }
            </div>
            <div>
                {
                    listEducation.map(edu => {
                        return (
                            <InputEducation
                                key={edu.id}
                                degrees={edu.degree}
                                buttonDelete={
                                    activeButton?
                                    <button onClick={()=>deleteEducationItem(edu.id)}><i className="fas fa-minus"></i></button>:''
                                }
                            />
                        )
                    })
                }
            </div>
        </div>
    );
}

function InputEducation({degrees, buttonDelete}) {
    const [degree, setDegree] = React.useState(degrees);
    const [university, setUniversity] = React.useState('');
    const [from, setFrom] = React.useState('');
    const [to, setTo] = React.useState('');

    return (
        <form>
            <input type="text" defaultValue={degree} onChange={(e)=>setDegree(e.target.value)} placeholder="Título" required />
            <input type="text" defaultValue={university} onChange={(e)=>setUniversity(e.target.value)} placeholder="Universidad / Escuela" required />
            <input type="text" defaultValue={from} onChange={(e)=>setFrom(e.target.value)} placeholder="Desde" required />
            <input type="text" defaultValue={to} onChange={(e)=>setTo(e.target.value)} placeholder="Hasta" required />

            {buttonDelete}
        </form>
    )
}

export default Education