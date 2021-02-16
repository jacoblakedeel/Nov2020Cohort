import React from 'react';
import {useSelector} from 'react-redux';

const ViewCountHooks = () => {

    const count = useSelector(state => state.count)



    return (
        <>
            View Count Hooks
            <h2>{count}</h2>
        </>
    )
}

export default ViewCountHooks;
