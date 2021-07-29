import {BrowserRouter as Router, Route} from 'react-router-dom';
import {AllInfo, Employee, PaymentInfo, PersonalInfo, ProductEmployee, ProductList, Thankyou, Welcome} from './pages';
import  Cart from './pages/Product/Cart';
import  Navigation from './pages/Navigation';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import {
    Jumbotron,
    Container,
    Nav,
    NavDropdown,
    Form,
    FormControl,
    Breadcrumb,
    Button,
    ButtonGroup, Badge
} from 'react-bootstrap'
import './App.css';
import React, {useState} from "react";
import {ThankYou} from "./pages/User/ThankYou";
import axios from "axios";
import {useDispatch} from "react-redux";
import Swal from "sweetalert2";



function App() {




    const [firstRender, setSetFirstRender] = useState(true);
    const [products,setProducts]=useState();

    const [product,setProduct]=useState({productnumber:'45123f',productname:"yr hird object",price:3,
        description:"tsad sdobje d is shoert discripton",quantity:1})

    if(firstRender){
        const response = axios.get("http://localhost:8080/products")
            .then((response) => {
                //setResult(response.data.value);
                console.log(response)
            });
        setSetFirstRender(false)
    }


    const [modalShow, setModalShow] = useState(false);
    const dispatch = useDispatch();

    const showModal = () => {
        setModalShow(true);
    };

    const hideModal = () => {
        setModalShow(false);
    };

    const addToCart=(product)=> {
        console.log("at app js")
        console.log(product)
          dispatch({ type : "add",product:product});
    }

    const removeFromCart=(e)=>{
        console.log("remove asd")
        console.log(e.target.value)
      dispatch({type:"remove",productnumber:e.target.value})

    }

    const fetchBackend2 = e => {
        const url = 'http://localhost:8080/products/' ;
        const response = axios.post(url, {
                operation: "",
                productNumber: "254578",
                productName: "Bazuka",
                quantity: "23",
                description: "this is descriptio"

            }
        ).then((response) => {
            // setResult(response.data.value);
            console.log(response)
        });

    }

    const swal=msg=> {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })

        Toast.fire({
            icon: 'success',
            title: msg
        })
    }

    return (
        <Container>

            <Router>
                <Route  path={["/"]}
                        render={(props) => (
                            <Navigation {...props}   openCart={showModal} />
                        )}

                />

                <Route exact path="/" component={Welcome} />
                <Route path="/thankyou" component={ThankYou} />
                <Route exact path={["/","/thankyou"]}
                       render={(props) => (
                           <ProductList {...props} addToCart={addToCart} removeFromCart={removeFromCart}  />
                       )}

                />

                <Route path="/employee" component={Employee} />
                <Route  path="/productEmployee"
                        render={(props) => (
                            <ProductEmployee {...props} swal={swal} />
                        )}

                />
                <Route path="/personalinfo" component={PersonalInfo} />
                <Route path="/paymentinfo" component={PaymentInfo} />

                <Route  path="/allinfo"
                        render={(props) => (
                            <AllInfo {...props} addToCart={addToCart} removeFromCart={removeFromCart} show={modalShow} swal={swal} closeCart={hideModal} />
                        )}

                />

                <Route  path="/"
                        render={(props) => (
                            <Cart {...props} addToCart={addToCart} removeFromCart={removeFromCart} show={modalShow} gogo={fetchBackend2} closeCart={hideModal} />
                        )}

                />
            </Router>



        </Container>
    );
}


export default App;