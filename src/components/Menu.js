import React from 'react';
import { Link } from 'react-router-dom';

function Menu(props) {
    return (
        <div>
            <nav>
                <Link to='/q3'>Q3</Link>
                <Link to='/q4'>Q4</Link>
                <Link to='/q5'>Q5</Link>
                <Link to='/q6'>Q6</Link>
            </nav>
        </div>
    );
}

export default Menu;