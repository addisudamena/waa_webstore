import React,{useState} from 'react';
import {Card, Button, ButtonGroup, Badge, Col, Row} from 'react-bootstrap';
import holder from '../images/item.png';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Cart from "../Product/Cart";
import {CartItem} from "../Product/CartItem";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";



export const AllInfo = (props) => {
    const currentCart = useSelector(state => state.cart);
    const currentUser = useSelector(state => state.user);
    const [sum,setSum]=useState((currentCart.size>0)?Array.from(currentCart.values()).map(p=>(p.price *p.quantity)).reduce((i,j,k)=>i+j):0);

    const dispatch = useDispatch();
    function endingOf(s) {
        return s;
    }



        const handleSubmit=e=> {
            e.preventDefault();
            console.log("whatis ")
            console.log(currentUser)
            console.log({...currentUser,this:"thie"})

            props.swal("Ascked")
            const response = axios.post('http://localhost:8080/user',null,{ params:{...currentUser,
                orders:Array.from(currentCart.values()).map(p=>p.productnumber).join(","),
                ammounts:Array.from(currentCart.values()).map(p=>p.quantity).join(",")}}

            ).then((response) => {


                props.swal("Product added")
            }, (error) => {
                console.log(error);
            });


        dispatch({ type : "clear"});
        props.history.push("./thankyou")
    }
    const recalculate=()=>{
        setSum((currentCart.size>0)?Array.from(currentCart.values()).map(p=>(p.price *p.quantity)).reduce((i,j,k)=>i+j):currentCart.size)
    }

    return (
        <Col md={12}>
            <Card>
                {/*<Card.Img variant="top" width="50px" src={holder} />*/}
                <Card.Header>
                    <h2>Confirm Information</h2>
                </Card.Header>
                <Card.Body>
                    <Row>
                        <Col md={6}>


                            <Card >
                                {/*<Card.Img variant="top" width="50px" src={holder} />*/}
                                <Card.Header>
                                    <h5>Order Information</h5>
                                </Card.Header>
                                <Card.Body>
                                    {Array.from(currentCart.values()).map(item => (
                                        <CartItem {...props} item={item} recalculate={recalculate}/>
                                    ))}
                                </Card.Body>
                                <Card.Footer>
                                     <h2 style={{float:"right"}}>${sum}.00</h2>
                                </Card.Footer>
                            </Card>

                        </Col>
                        <Col md={3}>

                            <Card >
                                {/*<Card.Img variant="top" width="50px" src={holder} />*/}
                                <Card.Header>
                                    <h5>Personal Information</h5>
                                </Card.Header>
                                <Card.Body>
                                    <div><strong>Name</strong><br/>{currentUser.firstName} {currentUser.lastName} </div>
                                    <div><strong>Email</strong><br/>{currentUser.email}</div>
                                    <div><strong>Phone</strong><br/>{currentUser.phone}</div>
                                    <div><strong>Street</strong><br/>{currentUser.street}</div>
                                    <div><strong>City</strong><br/>{currentUser.city}</div>
                                    <div><strong>Zip</strong><br/>{currentUser.zip}</div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={3}>



                            <Card >
                                {/*<Card.Img variant="top" width="50px" src={holder} />*/}
                                <Card.Header>
                                    <h5>Payment Information</h5>
                                </Card.Header>
                                <Card.Body>
                                <div><strong>Type</strong><br/>{currentUser.type}</div>
                                <div><strong>Number</strong><br/>...{endingOf(currentUser.number)}</div>
                                <div><strong>Valid thru</strong><br/>{currentUser.valid}</div>
                                <div><strong>Validation Code</strong><br/>***</div>

                                </Card.Body>
                            </Card>

                        </Col>
                    </Row>
                    <Button variant="primary" type="submit" onClick={handleSubmit}>
                        Confirm
                    </Button>
                </Card.Body>
            </Card>

        </Col>
    )
}