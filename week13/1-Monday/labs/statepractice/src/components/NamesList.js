import React, { Component } from 'react';




class NamesList extends Component {
    render() {

        let filteredData = this.props.data.filter(nameObj =>{

            return nameObj.name.toLowerCase().includes(this.props.searchVal)
        })

        filteredData = this.props.searchVal === "" ? [] :filteredData;


        return (
        <> 
            <ul>
                {filteredData.map(names =>(
                    <li key={names.id} className={names.sex}>{names.name}</li>
                ))}
            </ul>
            <ul>
                {this.props.data.map(names =>(
                <li className={names.sex}>{names.name}</li>
            ))}
            </ul>
            
        </>
        )
    }
}









export default NamesList;







