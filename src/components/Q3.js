import React from 'react';
import './style.css'
import {useSelector} from 'react-redux'
import { useParams } from 'react-router-dom';

function Q3(props) {
    const {annee}=useParams()
    const pays=useSelector(state=>state)
    const pp=pays.filter(p=>p.indepYear===parseInt(annee))
    return (
        <div>
            <h1>Pays ayant décroché leur independance en {annee} </h1>
            {pp.map(p=>
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

export default Q3;