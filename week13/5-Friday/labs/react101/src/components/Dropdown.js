
import React, { Component } from 'react';

class Dropdown extends Component{

    render() {
        let days = [
            "Monday", 
            "Tuesday", 
            "Wednesday", 
            "Thursday", 
            "Friday", 
            "Saturday", 
            "Sunday"
        ];
        let daysArr = days.map(day => {

            return <option>{day}</option>
                })
        
    
        return <>

        <select>
            {daysArr}
        </select>
        
        </>
    }
}

export default Dropdown;