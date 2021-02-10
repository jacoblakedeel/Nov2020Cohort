import React from 'react'
import {useHistory, useParams} from 'react-router-dom';

const Sample2 = () => {

    let history = useHistory();
    let { id } = useParams();

    const handleClick = () => {
        console.log("Another Statement");

        history.push('/')
    }
    


    return (
        <>  
            <h2>Sample2</h2>
            <h3 className="text">{id}</h3>
            <button onClick={handleClick}>Clique</button>
        </>
    )
}

export default Sample2;
