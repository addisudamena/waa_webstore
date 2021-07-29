
    import React, {useState} from "react";
    import {Modal, Image, Button, Badge} from "react-bootstrap";
    import {CartItem} from "./CartItem";
    import {useSelector} from "react-redux";




    const Cart = (props) => {
        const currentCart = useSelector(state => state.cart);
        const [sum,setSum]=useState((currentCart.size>0)?Array.from(currentCart.values()).map(p=>(p.price *p.quantity)).reduce((i,j,k)=>i+j):0);

       const recalculate=()=>{
           setSum((currentCart.size>0)?Array.from(currentCart.values()).map(p=>(p.price *p.quantity)).reduce((i,j,k)=>i+j):currentCart.size)
       }

        let modalbody=( <>
            <h2 style={{float:"right"}}>$0.00</h2>
        </>)


        if(currentCart.size>0){

            modalbody=(
                <>
                {Array.from(currentCart.values()).map(item => (
                    <CartItem {...props} item={item} recalculate={recalculate}/>
                ))}
                <h2 style={{float:"right"}}>${sum}
                    .00</h2>
                </>
            );

        }

        return (
            <Modal
                show={props.show}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                onHide={props.closeCart}
                onShow={recalculate}
            >
                <Modal.Header>
                    <h1>Cart</h1>
                    {/*<Badge variant="dark">{currentCart.length} items</Badge>*/}
                </Modal.Header>
                <Modal.Body>

                    {modalbody}

                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.closeCart}>Close</Button>
                    <Button onClick={()=>{props.closeCart();props.history.push("./personalinfo")}}>Checkout </Button>
                </Modal.Footer>
            </Modal>
        );
    };

    export default Cart;