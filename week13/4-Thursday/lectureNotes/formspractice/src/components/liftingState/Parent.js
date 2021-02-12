
import React, { Component, useState } from 'react';
import Clear from './Clear';
import DisplayInfo from './DisplayInfo';
import Increment from './Increment';

const Parent =() => {

    const [count, setCount] = useState(10);


    const incrementCount = () => setCount(count + 1);
    const clearCount = () => setCount(0);


    return (
        <>
            <h1 className="text-center mt-5 formFont">Lifting State</h1>

            <div className="row mt-5">
                <div className="col-6 offset-3 p-5 formColor formFont">
                    <DisplayInfo count={count}/>
                    <Increment increment={incrementCount}/>
                    &nbsp;&nbsp;
                    <Clear clear={clearCount}/>
                </div>
            </div>
        </>
        )
    }

export default Parent;
