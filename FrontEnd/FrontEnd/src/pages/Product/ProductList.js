import React,{useState} from 'react';
import {ProductItem} from "./ProductItem";
import {Col, Row} from "react-bootstrap";
import axios from "axios";
export const ProductList = (props) => {

    const [firstRender, setSetFirstRender] = useState(true);
 const [productsFetched,setProductsFetched]=useState([])
    if(firstRender){
        const response = axios.get("http://localhost:8080/products")
            .then((response) => {
                //setResult(response.data.value);
                setProductsFetched(response.data)
                console.log(response.data)
            });
        setSetFirstRender(false)
        console.log("render prdlist happens")

    }
    return (
        <Row>
            {

                productsFetched.sort((a, b) => (a.productnumber > b.productnumber) ? 1 : -1).map(productFetched=> ( <ProductItem {...props} productsFetched={productsFetched}  setProductsFetched={setProductsFetched} productFetched={productFetched}></ProductItem>))
            }



        </Row>
    )
}