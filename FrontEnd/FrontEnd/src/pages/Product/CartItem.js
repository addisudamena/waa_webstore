import React,{useState} from 'react';
import {Card, Button, ButtonGroup, Badge, Row, Col} from 'react-bootstrap';
import holder from '../images/item.png';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import {useSelector} from "react-redux";
import {logDOM} from "@testing-library/react";

export const CartItem = (props) => {

    const currentCart = useSelector(state => state.cart);
    const productnumber=props.item.productnumber;
    const [quantity,setQuantity]=useState(currentCart.get(productnumber).quantity);
    const substring=s=>{
   // return s.substr(0,(Math.min(props.item.description.length,20)));
    return s;
}
const handleAddtoCart=(p)=>{

        props.addToCart(p)
    setQuantity(currentCart.get(productnumber).quantity)
    props.recalculate()
}

    const hadleRemoveFromCart=e=> {
        props.removeFromCart(e)
        if(quantity>1){
            setQuantity(currentCart.get(productnumber).quantity)
            props.recalculate()
        }else {
            props.closeCart()
        }

    }


    let addButton=(<Button size="sm" onClick={()=>handleAddtoCart(props.item)} > + </Button>)

    return (
        <>
            <Card style={{ width: '100%' }}>

                <Card.Body>
                    <Row>
                        <Col md={1} >
                            <Card.Img variant="top" style={{ width: '34px' }} src={holder} />


                        </Col>
                        <Col>
                            <Card.Title>{props.item.productname}</Card.Title>
                            <Card.Text></Card.Text>

                        </Col>
                        <Col style={{alignItems:'bottom',textAlign: 'right'}}>


                            <ButtonGroup className="mb-2">
                                <Button size="sm" variant="danger" value={props.item.productnumber} onClick={hadleRemoveFromCart}> - </Button>
                                <span style={{padding:"0 10px"}}>${props.item.price} x{quantity} =<strong>(${(props.item.price)*(quantity)})</strong> </span>
                                {addButton}
                            </ButtonGroup></Col>
                    </Row>

                </Card.Body>
            </Card>

        </>
    )
}