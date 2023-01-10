import React,{useState} from 'react';
import { useSelector } from 'react-redux';
import './style.css'

function Q6(props) {
    const options=[
        'Afrique',
        'Europe',
        'Asie',
        'Amérique',
        'Australie'
    ]
    const [value,setValue]=useState('Afrique')
    const pays=useSelector(state=>state.filter(p=>p.continent===value))
    return (
        <div>
            <h1>pays filtrés par continent</h1>
            <select value={value} onChange={(e)=>setValue(e.target.value)}>
                {
                    options.map((option)=>(
                        <option value={option}>{option} </option>
                    ))
                }
            </select>
            <hr />
            {pays.map(p=>
                <div className='card'>
                    <img src={p.image} alt={p.name}/>
                    <h1>{p.name} </h1>
                    <h3>{p.surfaceArea} </h3>
                    <h3>{p.population} </h3>
                </div>
            )}
        </div>
    );
}

export default Q6;