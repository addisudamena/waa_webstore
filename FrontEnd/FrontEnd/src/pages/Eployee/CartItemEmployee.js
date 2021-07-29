import React,{useState} from 'react';
import {Card, Button, ButtonGroup, Badge, Row, Col, Form} from 'react-bootstrap';
import holder from '../images/item.png';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

export const CartItemEmployee = (props) => {


    return (
        <>
            <Card style={{ width: '100%' }}>

                <Card.Body>
                    <Row>
                        <Col md={1} >


                        </Col>
                        <Col>

                            <Card.Text> Order Number: <strong>521475</strong></Card.Text>
                            <Card.Text> Status:<strong> Delivered </strong></Card.Text>

                        </Col>
                        <Col style={{alignItems:'bottom',textAlign: 'right'}}>


                        <Form>
                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Control as="select" defaultValue="PLACED">
                                    <option>PLACED</option>
                                    <option>SHIPPED</option>
                                    <option>DELIVERED</option>
                                </Form.Control>
                            </Form.Group>
                        </Form>
                        </Col>
                    </Row>

                </Card.Body>
            </Card>

        </>
    )
}