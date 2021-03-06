import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CardList from './components/CardList';
import './assets/styles/global.css';
import Card from './components/cards/Card';
import data from './data/cardContacts';

class App2 extends Component {
    
    render() {
        let contactsArr = data.map(contact =>{
            return <Card name={contact.name} img={contact.imgURL} tel={contact.phone} email={contact.email}/>
        })
        return (
            <>

            <div>
                <h1 className="heading">
                    My Contacts
                </h1>
                {contactsArr}
            </div>




                {/* <div className="bg-purple">
                    Da Fuq
                </div>
                <div style={styles.purple}>
                    Hola
                </div>
                <Container fluid>
                    <Row>
                        <Col md={12}>
                            <CardList />
                        </Col>
                    </Row>
                </Container> */}
            </>
        )
}
}

const styles ={
    purple: {
        color: 'orange',
        fontSize: '40px'
    }
}

export default App2;
