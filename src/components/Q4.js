import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Q4(props) {
    const pays=useSelector(state=>state);
    const anneeIndep=pays.map(p=>p.indepYear)
    const annee=[...new Set(anneeIndep)]
    return (
        <div>
            {
                annee.map(p=>(
                    <div>
                        <Link to={'/q3/' + p} key={p}> {p} </Link>
                    </div>
                ))
            }
        </div>
    );
}

export default Q4;