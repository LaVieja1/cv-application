import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import './experience.css';

function Experience ({activeButton}) {
    const [listExperience, setListExperience] = React.useState([
        {
            id: uuidv4(),
            name: ''
        }
    ])

    function handleAddButton(e) {
        let concatList = listExperience.concat([
            {
                id: uuidv4(),
                name: ''
            }
        ]);
        setListExperience(concatList)
    }

    function deleteExperienceItem(id) {
        let aux = listExperience.filter(a => a.id !== id);
        setListExperience(aux);
    }

    return (
        <div className='experience'>
            <div className='content-headers'>
                <h2>Experiencia</h2>
                {
                    activeButton?
                    <button onClick={handleAddButton}><i className='fas fa-plus'></i></button>:''
                }
            </div>
            <div>
                {
                    listExperience.map(expe => {
                        return (
                            <InputExperience
                                key={expe.id}
                                title={expe.name}
                                buttonDelete={
                                    activeButton?
                                    <button className='deleteBtn' onClick={()=>deleteExperienceItem(expe.id)}><i className='fas fa-minus'></i></button>:''
                                }
                            />
                        )
                    })
                }
            </div>
        </div>
    );
}

function InputExperience({title, buttonDelete}) {
    const [jobTitle, setJobTitle] = React.useState(title);
    const [company, setCompany] = React.useState('');
    const [from, setFrom] = React.useState('');
    const [to, setTo] = React.useState('');
    const [description, setDescription] = React.useState('');

    return (
        <form>
            <input type='text' defaultValue={jobTitle} onChange={(e)=>setJobTitle(e.target.value)} placeholder='Trabajo' required />
            <input type='text' defaultValue={company} onChange={(e)=>setCompany(e.target.value)} placeholder='Compañia' required />
            <input type='text' defaultValue={from} onChange={(e)=>setFrom(e.target.value)} placeholder='Desde' required />
            <input type='text' defaultValue={to} onChange={(e)=>setTo(e.target.value)} placeholder='Hasta' required />
            <textarea onChange={(e)=>setDescription(e.target.vaue)} value={description} placeholder='Descripción' required />
        
            {buttonDelete}
        </form>
    )
}

export default Experience;