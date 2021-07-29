import React,{useState} from 'react';
import {Card, Button, ButtonGroup, Badge, Container, Col, FormControl} from 'react-bootstrap';
import holder from '../images/item.png';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Item from "./Item";

export const ProductItem = (props) => {



    const [modalShow, setModalShow] = useState(false);

    const showModal = () => {
        setModalShow(true);
    };

    const hideModal = () => {
        setModalShow(false);
    };


    const handleAddtoCart=(p)=>{
        let temp=props.productsFetched.filter(tp=>tp.productnumber!=p.productnumber)
        p.quantity--;
        props.setProductsFetched(temp.concat(p))
        console.log(props.productsFetched)
        props.addToCart(p)
    }
    let addButton=(<Button size="sm" onClick={()=>handleAddtoCart(props.productFetched)} >Add</Button>);

    if(props.productFetched.quantity<1){
        addButton=(<Button size="sm" onClick={()=>handleAddtoCart(props.productFetched)} disabled>x</Button>)
    }

    return (
        <Col md={3}>
            <Card style={{ width: '12rem' }}>
                <Card.Img variant="top" width="50px" src={holder} />
                <Card.Body>
                    <Card.Title>{props.productFetched.productname}<Badge variant="dark"  style={{float:'right'}}>${props.productFetched.price}.00</Badge></Card.Title>
                    <Card.Text>

                    </Card.Text>
                    <ButtonGroup className="mb-2"  >
                        <Button size="sm" onClick={showModal} variant="warning" >view</Button>
                        <FormControl
                            placeholder="Username"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            readOnly
                            value={props.productFetched.quantity}
                        />
                        {addButton}
                    </ButtonGroup>
                </Card.Body>
            </Card>
        <Item {...props}  show={modalShow}  hideItem={hideModal}  />
        </Col>
    )
}