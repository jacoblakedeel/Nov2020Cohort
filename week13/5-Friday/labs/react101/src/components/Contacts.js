
import React, { Component } from 'react';

const Contacts = (props) => {

    return <>
        <h1>{props.FirstName} {props.LastName}</h1>
        <h3>{props.email}</h3>

    </>
}


export default Contacts
