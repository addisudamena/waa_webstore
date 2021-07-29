
    import React, {useState} from "react";
    import {Modal, Image, Button, Badge, Card, ButtonGroup, Row, Col, FormControl} from "react-bootstrap";
    import {CartItem} from "./CartItem";
    import {useSelector} from "react-redux";
    import holder from "../images/item.png";




    const Item = (props) => {
        const currentCart = useSelector(state => state.cart);
        const [itemCount,setItemCount]=useState(currentCart.length);



        const handleAddtoCart=(p)=>{
            let temp=props.productsFetched.filter(tp=>tp.productnumber!=p.productnumber)
            p.quantity--;
            props.setProductsFetched(temp.concat(p))
            console.log(props.productsFetched)
            props.addToCart(p)
        }

        let addButton=(<Button  onClick={()=>handleAddtoCart(props.productFetched)} >Add</Button>);

        if(props.productFetched.quantity<1){
            addButton=(<Button  onClick={()=>handleAddtoCart(props.productFetched)} disabled>x</Button>)
        }

        return (
            <Modal
                show={props.show}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                onHide={props.hideItem}
            >

                <Modal.Body>
                    <Card >
                        <Row>
                            <Col><Card.Img variant="top" width="50px" src={holder} /></Col>
                            <Col><Card.Body>
                                <Card.Title>{props.productFetched.productname}
                                    <Badge style={{float:'right'}} variant="dark">${props.productFetched.price}.00</Badge></Card.Title>
                                <Card.Text>{props.productFetched.description}</Card.Text>

                            </Card.Body></Col>
                        </Row>


                    </Card>
                </Modal.Body>
                <Modal.Footer>
                    <ButtonGroup className="mb-2"  > <FormControl
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        readOnly
                        value={props.productFetched.quantity}
                    />

                    {addButton}
                </ButtonGroup>
                        <Button onClick={props.hideItem}>Close</Button>

                  </Modal.Footer>
            </Modal>
        );
    };

    export default Item;