import React,{useState} from 'react';
import {Card, Button, ButtonGroup, Badge, Form, Row, Col} from 'react-bootstrap';
import holder from '../images/item.png';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import {useDispatch, useSelector} from "react-redux";

export const PersonalInfo = (props) => {

    const currentUser = useSelector(state => state.user);
    const dispatch = useDispatch();


    const [firstnameError, setFirstnameError] = useState({});
    const [lastnameError, setLastnameError] = useState({});
    const [emailError, setEmailError] = useState({});
    const [phoneError, setPhoneError] = useState({});

    const [user,setUser]=useState(currentUser)
    const handleChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }

    const handleOnSubmit=e=>{
        e.preventDefault()
        //const  isValid = formValidation();
       // if (isValid) {
            dispatch({type: "userinfo", user: user});
            props.history.push("./paymentinfo")
       // }
    }



    const formValidation = () => {
        const firstNameErr = {};
        const lastNameErr = {};
        const emailErr = {};
        const phoneErr = {};
        let isValid = true;

        if (user.firstName.trim().length < 2) {
            firstNameErr.firstNameShort = "First name is too short"
            isValid = false;
        }
        if (user.firstname.trim().length > 10) {
            firstNameErr.firstNameShort = "First name is too long"
            isValid = false;
        }
        if (user.lastName.trim().length < 2) {
            lastNameErr.lastNameShort = "Last name is too short"
            isValid = false;
        }
        if (user.phone.trim().length < 2) {
            phoneErr.phoneShort = "phone Number is too short"
            isValid = false;
        }
        if (user.email.trim().length < 5) {
            emailErr.emailShort = "Email is too short"
            isValid = false;
        }
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(user.email.trim())) {
            emailErr.emailNoEmail = "Email is not correct"
            isValid = false;
        }

        setFirstnameError(firstNameErr);
        setLastnameError(lastNameErr);
        setEmailError(emailErr);
        setPhoneError(phoneErr);
        return isValid;
    }


    return (
        <Row>
            <Col md={12}>
                <Card >
                    {/*<Card.Img variant="top" width="50px" src={holder} />*/}
                    <Card.Header>
                        <h2>Personal Information</h2>
                    </Card.Header>
                    <Card.Body>

                <Form>

                    <Row>
                        <Col>
                            <Form.Group controlId="first-name">

                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" value={user.firstName} onChange={handleChange} Name="firstName" />
                                <Form.Text className="text-muted">
                                    {Object.keys(firstnameError).map((key) => {
                                        return <div style={{ color: "red" }}>{firstnameError[key]}</div>
                                    })}
                                </Form.Text>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="last-name">

                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" value={user.lastName}  onChange={handleChange} Name="lastName" />
                                <Form.Text className="text-muted">
                                    {Object.keys(lastnameError).map((key) => {
                                        return <div style={{ color: "red" }}>{lastnameError[key]}</div>
                                    })}
                                </Form.Text>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Form.Group controlId="email">

                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" value={user.email} onChange={handleChange} Name="email" />
                                <Form.Text className="text-muted">
                                    {Object.keys(emailError).map((key) => {
                                        return <div style={{ color: "red" }}>{emailError[key]}</div>
                                    })}
                                </Form.Text>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="phone-number">

                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control type="text" value={user.phone} onChange={handleChange} Name="phone" />
                                <Form.Text className="text-muted">
                                    {Object.keys(phoneError).map((key) => {
                                        return <div style={{ color: "red" }}>{phoneError[key]}</div>
                                    })}
                                </Form.Text>
                            </Form.Group>
                        </Col>
                    </Row>
                        <Form.Group controlId="street">

                            <Form.Label>Street</Form.Label>
                            <Form.Control type="text" value={user.street} onChange={handleChange} Name="street" />
                            <Form.Text className="text-muted">

                            </Form.Text>
                        </Form.Group>
                    <Row>
                        <Col>
                            <Form.Group controlId="city">

                                <Form.Label>City</Form.Label>
                                <Form.Control type="text" value={user.city} onChange={handleChange} Name="city" />
                                <Form.Text className="text-muted">

                                </Form.Text>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="zip">

                                <Form.Label>Zip</Form.Label>
                                <Form.Control type="text "value={user.zip} onChange={handleChange} Name="zip" />
                                <Form.Text className="text-muted">

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