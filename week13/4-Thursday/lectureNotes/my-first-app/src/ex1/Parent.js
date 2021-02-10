import React from 'react';
import Child from './Child';
import Grandchild from './Grandchild';

const Parent = (props) => {
    return(
        <div>
            <>
            This is Parent {props.firstName}
            </>
            <Child />
            <Grandchild />
        </div>
    );
}

export default Parent;