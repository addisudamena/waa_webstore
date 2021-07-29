
    import React, {useState} from "react";
    import {Modal, Button, Badge, Form} from "react-bootstrap";
    import axios from "axios";





    const NewProduct = (props) => {


        const [newProduct,setNewProduct]=useState({productnumber: "", productname: "", price: "", quantity: "", description: ""})



        const handleAdd = e => {
            console.log(props.currentProduct)
           const response = axios.post('http://localhost:8080/products',null, {params:props.currentProduct}
            ).then((response) => {
                props.setProducts(props.products.filter(p=>p.productnumber!=props.currentProduct.productnumber).concat(props.currentProduct))
                props.hideModal()
               if(props.eidting)
                   props.swal("Product updated")
               else
                    props.swal("Product added")
            });
        }

        const handleChange=(e)=>{
            props.setCurrentProduct({...props.currentProduct,[e.target.name]:e.target.value})
            setNewProduct({...newProduct,[e.target.name]:e.target.value})


        }

        let button= (<Button onClick={handleAdd}>Add </Button>)
        let productnumberinput= (<Form.Control onChange={handleChange} value={props.currentProduct.productnumber} name="productnumber"/>)

        if(props.eidting){
            productnumberinput= (<Form.Control onChange={handleChange} value={props.currentProduct.productnumber} name="productnumber" readOnly/>)
            button= (<Button onClick={handleAdd}> Update </Button>)

        }


        return (
            <Modal show={props.show} size="md" aria-labelledby="contained-modal-title-vcenter" centered onHide={props.hideModal}>
                <Modal.Header>
                    <h1>New Product</h1>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="product-number">
                            <Form.Label>Product Number</Form.Label>
                            {productnumberinput}
                        </Form.Group>


                        <Form.Group controlId="product-name">
                            <Form.Label>Product Name</Form.Label>
                            <Form.Control onChange={handleChange} value={props.currentProduct.productname} name="productname" />
                        </Form.Group>

                        <Form.Group controlId="price">
                            <Form.Label>Price</Form.Label>
                            <Form.Control onChange={handleChange} value={props.currentProduct.price} name="price" />
                        </Form.Group>


                        <Form.Group controlId="description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3} onChange={handleChange} value={props.currentProduct.description} name="description"  />
                        </Form.Group>

                        <Form.Group controlId="quantity">
                            <Form.Label>Quantity</Form.Label>
                            <Form.Control onChange={handleChange} value={props.currentProduct.quantity} name="quantity" />
                        </Form.Group>



                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.hideModal}>Cancel</Button>
                    {button}
                </Modal.Footer>
            </Modal>
        );
    };

    export default NewProduct;