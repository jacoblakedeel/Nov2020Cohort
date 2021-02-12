import React, { useState } from 'react';




const FormsHook = () => {

    const [textValue, setTextValue] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [selectValue, setSelectValue] = useState('');


    console.log(textValue);
    console.log(isValid);
    console.log(selectValue);

    return (
        <>
            <h1 className="text-center mt-5 formFont">Class-Based Forms</h1>

            <div className="row mt-5">
                <div className="col-6 offset-3 formColor formFont p-5">
                    <form onSubmit={(e)=>{e.preventDefault()}}>
                        <input name="textValue" type="text" value={textValue} 
                        onChange={(e)=>{setTextValue(e.target.value)}}/>

                        <br/>

                        <input name="isValid" type="checkbox" checked={isValid}
                        onChange={(e)=>{setIsValid(e.target.checked)}}/>

                        <br/>

                        <select name="selectValue" onChange={(e)=>{setSelectValue(e.target.value)}}>
                            <option value="NewYork">New York</option>
                            <option value="Houston">Houston</option>
                            <option value="Atlanta">Atlanta</option>
                            <option value="Seattle">Seattle</option>
                            <option value="SantaBarbara">Santa Barbara</option>
                        </select>

                        <br/>

                        <input type="submit"/>

                    </form>
                </div>

                
            </div>
        </>
    )
}

export default FormsHook;
