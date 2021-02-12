import React from 'react'



const Increment = (props) => {
    return (
        <>
            <button className="btn btn-warning" onClick={props.increment}>Increment</button>
        </>
    )
}

export default Increment;
