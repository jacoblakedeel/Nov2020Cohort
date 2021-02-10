
import React, { Component } from 'react';
import Contacts from './components/Contacts';
import data from './data/contacts';
import Days from './components/Days';
import Dropdown from './components/Dropdown';
import Button from './components/Button';



class App extends Component {
  render() {

    let contactsArr = data.map(contactObj =>{

      return <Contacts 
      FirstName={contactObj.first_name} 
      LastName={contactObj.last_name}
      email={contactObj.email}
      />
    })

    return (
    <>
    <Button color="info"/>
    <Dropdown />
    <Days />
    
    </>
  );
}
}
  

export default App;
