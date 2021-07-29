import React,{useState} from 'react';
import {Card, Button, ButtonGroup, Badge, Row, Col, Form} from 'react-bootstrap';
import holder from '../images/item.png';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import {useDispatch, useSelector} from "react-redux";

export const PaymentInfo = (props) => {


    const currentUser = useSelector(state => state.user);

    const [user,setUser]=useState(currentUser)
    const dispatch = useDispatch();
    const handleChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }

    const handleOnSubmit=e=>{
        e.preventDefault()
        dispatch({ type : "userinfo",user: user});
        props.history.push("./allinfo")
    }

    return (<Row>
            <Col md={12}>
                <Card >
                    {/*<Card.Img variant="top" width="50px" src={holder} />*/}
                    <Card.Header>
                        <h2>Payment Information</h2>
                    </Card.Header>
                    <Card.Body>

                        <Form>

                            <Row>
                                <Col>
                                    <Form.Group as={Col} controlId="formGridState">
                                        <Form.Label>Type</Form.Label>
                                        <Form.Control as="select"value={user.type} onChange={handleChange} Name="type" >
                                            <option>CREDIT</option>
                                            <option>DEBIT</option>
                                            <option>ATM</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="card-Number">

                                        <Form.Label>Card Number</Form.Label>
                                        <Form.Control type="text" value={user.number} onChange={handleChange} Name="number"  />
                                        <Form.Text className="text-muted">
                                            We'll never share your email with anyone else.
                                        </Form.Text>
                                    </Form.Group>
                                </Col>

                            </Row>

                            <Row>
                                <Col>
                                    <Form.Group controlId="valid-date">

                                        <Form.Label>Valid thru</Form.Label>
                                        <Form.Control type="text" value={user.valid} onChange={handleChange} Name="valid"  placeholder="MM/YY" />
                                        <Form.Text className="text-muted">
                                            We'll never share your email with anyone else.
                                        </Form.Text>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="validation-code">

                                        <Form.Label>CCV/CVC</Form.Label>
                                        <Form.Control type="email" value={user.ccv} onChange={handleChange} Name="ccv"  />
                                        <Form.Text className="text-muted">
                                            We'll never share your email with anyone else.
                                        </Form.Text>
                                    </Form.Group>
                                </Col>

                            </Row>



                            <Button variant="primary" type="submit" onClick={handleOnSubmit}>
                                Next
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>

        </Row>
    )
}