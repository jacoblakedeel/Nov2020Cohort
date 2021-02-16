
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addPerson, removePerson} from '../actions/Persons';

const Forms = () => {

  const dispatch = useDispatch(); //access to dispatch function
  const persons = useSelector(state => state.persons); 

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const handleOnSubmit = (e) => {
    e.preventDefault();

    dispatch(addPerson({
      firstName: firstName,
      lastName: lastName
    }))

    setFirstName('');
    setLastName('');
  }
  


  return (
    <>
      <form onSubmit={handleOnSubmit}>
        Name: <input value={firstName} onChange={(e)=> setFirstName(e.target.value)} type="text"/> <br />
        Last Name: <input value={lastName} onChange={(e)=> setLastName(e.target.value)} type="text"/> <br />

        <button type="submit">Submit</button>
      </form>

      <ul>
        {persons.map(person => {
        return <li key={person.firstName}>{person.firstName} {person.lastName} <button onClick={()=>dispatch(removePerson(person.firstName))}>X</button></li>

        })}
    </ul>


    </>
  )
}

export default Forms;
