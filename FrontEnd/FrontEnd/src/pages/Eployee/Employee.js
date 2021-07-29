import React,{useState} from 'react';
import {Card, Button, ButtonGroup, Badge, Col, Row, Table, Form} from 'react-bootstrap';
import holder from '../images/item.png';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Cart from "../Product/Cart";
import {CartItem} from "../Product/CartItem";
import {CartItemEmployee} from "./CartItemEmployee";
import axios from "axios";



export const Employee = (props) => {





    const [firstRender, setSetFirstRender] = useState(true);
    const [orders,setOrders]=useState([]);


    if(firstRender){
        const response = axios.get("http://localhost:8080/orders")
            .then((response) => {
                //setResult(response.data.value);
              //  setOrders([1,2,3,4])
                setOrders(response.data)
                console.log("afterthis")
                console.log(response.data)
                console.log(orders)
            });
        setSetFirstRender(false)
    }


    function hanleChange(e) {
        console.log( e)
        console.log(orders.filter(o=>o.phoneNumber==e.target.value))
    }

    return (
        <Col md={12}>
            <Card>
                {/*<Card.Img variant="top" width="50px" src={holder} />*/}
                <Card.Header>
                    <h2>Orders</h2>
                </Card.Header>
                <Card.Body>
                    <Table striped bordered hover border={1} size="sm">
                        <thead>
                        <tr>
                            <th>Customer</th>
                            <th>Phone</th>
                            <th>City</th>
                            <th>Street</th>
                            <th>Zip</th>
                            <th>Order</th>
                            <th>Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        {orders.map(item=>(
                          <tr >
                            <td>{item.firstName} {item.lastName}</td>
                            <td>{item.phoneNumber}</td>
                            <td>{item.address.city}</td>
                            <td>{item.address.street}</td>
                            <td>{item.address.zip}</td>

                              <td>
                                  {item.orders.map(o=>(
                                      <tr>
                                          <td>Product id:{o.description}</td>
                                          <td>Amount:{o.amount}</td>

                                      </tr>
                                  ))}

                              </td>
                              <td > <ButtonGroup className="mb-2">

        <Button variant="primary" type="submit" value={item.phoneNumber} onClick={hanleChange}>DELIVERED</Button>
        <Button variant="secondary" type="submit" value={item.phoneNumber} onClick={hanleChange}>PLACED</Button>
        <Button variant="secondary" type="submit" value={item.phoneNumber} onClick={hanleChange}>SHIPPED</Button>
                              </ButtonGroup>

                              </td>


                            </tr>

                        ))}

                        </tbody>
                    </Table>


                </Card.Body>
            </Card>

        </Col>
    )
}