import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';


const Calculator = () => {
    return(
        <>
        <Container>
            <Row>
                <Col className="grayButtons">
                    0
                </Col>   
            </Row>
            <Row>
                <Col xs={3} className="orangeButtons">
                    ac
                </Col>
                <Col xs={3} className="orangeButtons">
                    +/-
                </Col>
                <Col xs={3} className="orangeButtons">
                    %
                </Col>
                <Col xs={3} className="orangeButtons">
                    /
                </Col>
            </Row>
            <Row>
                <Col className="grayButtons">
                    7
                </Col>
                <Col className="grayButtons">
                    8
                </Col>
                <Col className="grayButtons">
                    9
                </Col>
                <Col className="orangeButtons">
                    x
                </Col>
            </Row>
            <Row>
                <Col className="grayButtons">
                    4
                </Col>
                <Col className="grayButtons">
                    5
                </Col>
                <Col className="grayButtons">
                    6
                </Col>
                <Col className="orangeButtons">
                    -
                </Col>
            </Row>
            <Row>
                <Col className="grayButtons">
                    1
                </Col>
                <Col className="grayButtons">
                    2
                </Col>
                <Col className="grayButtons">
                    3
                </Col>
                <Col className="orangeButtons">
                    +
                </Col>
            </Row>
            <Row>
                <Col xs={6} className="grayButtons">
                    0
                </Col>
                <Col className="grayButtons">
                    .
                </Col>
                <Col className="orangeButtons">
                    =
                </Col>
            </Row>
        </Container>
        </>
    )
}



export default Calculator