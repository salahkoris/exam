import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { addCitie,modifyPopulation } from '../store/store';

function Q5(props) {
    const dispatch=useDispatch();
    const [ville,setVille]=useState({
        name:'',
        district:'',
        population:0,
        capitale:false
    })
    return (
        
        <div>
            <h1>Question 5 {ville.name} </h1>

            <input type="text" placeholder='taper un nom de ville ici' onChange={(e)=>setVille({...ville,name:e.target.value})}/><hr />
            <select value={ville.district} onChange={(e)=>setVille({...ville,district:e.target.value})}>
                <option value='province'>province</option>
                <option value='région'>région</option>
            </select>
            <input type="text" placeholder='taper le nombre d habitant' onChange={(e)=>setVille({...ville,population:e.target.value})}/><hr />
            <input type="text" placeholder='taper true ou false' onChange={(e)=>setVille({...ville,population:e.target.value})}/><hr />
            <button onClick={()=>
                dispatch(addCitie({
                    code:1,
                    ville:ville
                }))
            }>Ajouter ville</button>
            <button onClick={()=>{
                dispatch(modifyPopulation({
                    code:1,
                    population:456123
                }))
            }}>Modifier population</button>
        </div>
    );
}

export default Q5;