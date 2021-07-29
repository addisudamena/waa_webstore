import React, { useState } from "react";
import {useDispatch, useSelector} from "react-redux";

import {
    Navbar,
    Nav,
    NavDropdown,
    Form,
    FormControl,
    Button, ButtonGroup, Badge, InputGroup
} from "react-bootstrap";
import Cart from "./Product/Cart";



const Navigation = (props) => {
   // const dispatch = useDispatch();
    const currentCart = useSelector(state => state.cart);
    const itemCount = useSelector(state => state.count);

    let cartBadge =(<Badge variant="dark">0  ($0.00)</Badge>);


    if(currentCart.size>0){

    cartBadge=(<Badge variant="dark">{itemCount}  (${
        Array.from(currentCart.values()).map(p=>(p.price *p.quantity)).reduce((i,j,k)=>i+j)
    }.00)</Badge>)
    }


    return (
        <Navbar bg="primary" variant="dark" expand="md">
            <Navbar.Brand onClick={()=>props.history.push("./")}>Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link onClick={()=>props.history.push("/employee")}> Orders</Nav.Link>
                    <Nav.Link onClick={()=>props.history.push("/productEmployee")}>Product</Nav.Link>
                    <NavDropdown title="Sample Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            Separated link
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form inline>
                <InputGroup  className="mb-2">
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-light">Search</Button>
                </InputGroup >
                <ButtonGroup className="mb-2">
                    <Button onClick={ props.openCart} variant="outline-light">
                        Cart {cartBadge}
                        <span className="sr-only">Items in Cart</span>
                    </Button>
                </ButtonGroup>


                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
};
export default Navigation;