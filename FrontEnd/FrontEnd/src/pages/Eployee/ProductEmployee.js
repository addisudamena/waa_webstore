import React,{useState} from 'react';
import {Card, Button, ButtonGroup, Badge, Row, Col, Form, Table} from 'react-bootstrap';
import Swal from 'sweetalert2'
import holder from '../images/item.png';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import NewProduct from "./NewProduct";
import axios from "axios";

export const ProductEmployee = (props) => {

    const [modalShow, setModalShow] = useState(false);
    const [firstRender, setSetFirstRender] = useState(true);

    const [products,setProducts]=useState([]);
    const [editing,setEditing]=useState(false);
    const [currentProduct,setCurrentProduct]=useState({productnumber:"", productname:"", price:"", description:"", quantity:""});

    const reparse=o=> {
        Object.keys(o).forEach(k => {
            if (typeof o[k] === 'object') {
                return toString(o[k]);
            }

            o[k] = '' + o[k];
        });

        return o;
    }

    const showModal = () => {
        setCurrentProduct({productnumber:"", productname:"", price:"", description:"", quantity:""})
        setEditing(false)
        setModalShow(true);
    };




    const hideModal = () => {
        setModalShow(false);

    };



    const header=["Product name","Price","# in stock"];

     function handleAdd(e) {
        console.log(products)
        console.log(e.target.value)
        console.log("" + products[0].productnumber)
        console.log(currentProduct)
        //setCurrentProduct(products.filter(p => "" + p.productnumber == e.target.value)[0])
         //setCurrentProduct(reparse(products.filter(p => "" + p.productnumber == e.target.value)[0]))
         handleSwal(products.filter(p => "" + p.productnumber == e.target.value)[0])

    }



    async function handleSwal(e) {
        const {value: amount} = await Swal.fire({
            title: 'Set amount to stock',
            input: 'number',
            inputValue: e.quantity,
            inputLabel: 'Current amount: '+ e.quantity,
            inputPlaceholder: e.quantity
        })
        if (amount) {
            console.log(e)
            e.quantity=amount
            setProducts(products.filter(p => "" + p.productnumber !=e.productnumber).concat(e))
            const response = axios.post('http://localhost:8080/products',null, {params:reparse(e)}
            ).then((response) => {
               props.swal("Product updated")

            });

        }

    }














    function handleEdit(e) {
        setEditing(true)
        setCurrentProduct(reparse(products.filter(p=>p.productnumber==e.target.value)[0]))
       setModalShow(true);
    }

    function handleDelete(e) {
        console.log(`http://localhost:8080/deleteproduct/${e.target.value}`)
        const response = axios.get(`http://localhost:8080/deleteproduct/${e.target.value}`)
            .then((response) => {
                //setResult(response.data.value);
                setProducts(products.filter(p=>p.productnumber!=e.target.value))
            });
    }
    if(firstRender){
        const response = axios.get("http://localhost:8080/products")
            .then((response) => {
                //setResult(response.data.value);
                setProducts(response.data)
            });
        setSetFirstRender(false)
    }


    return (<Row>
            <Col md={12}>
                <Card >
                    {/*<Card.Img variant="top" width="50px" src={holder} />*/}
                    <Card.Header>
                        <h2>Product List</h2>
                    </Card.Header>
                    <Card.Body>

                        <Table responsive>
                            <thead>
                            <tr>
                                <th>#</th>
                                {header.map((_, index) => (
                                    <th key={index}>{_}</th>
                                ))}
                            </tr>
                            </thead>
                            <tbody>
                            {
                                products.map(product=>(<tr key={product.productnumber}>
                                    <td>{product.productnumber}</td>
                                    <td>{product.productname}</td>
                                    <td>{product.price}</td>
                                    <td>{product.quantity}</td>

                                    <td><ButtonGroup aria-label="Basic example">
                                        <Button size="sm" value={product.productnumber} onClick={handleAdd}> + Add</Button>
                                        <Button size="sm" value={product.productnumber} onClick={handleEdit}> ^ Edit</Button>
                                        <Button size="sm" variant="danger" value={product.productnumber} onClick={handleDelete}> X Delete</Button>
                                    </ButtonGroup></td>


                                </tr>))
                            }


                            </tbody>
                        </Table>
                        <Button onClick={showModal}>Add Product</Button>
                        <NewProduct {...props} eidting={editing} setCurrentProduct={setCurrentProduct} currentProduct={currentProduct} hideModal={hideModal}  setProducts={setProducts} products={products} show={modalShow}/>
                    </Card.Body>
                </Card>
            </Col>

        </Row>
    )
}