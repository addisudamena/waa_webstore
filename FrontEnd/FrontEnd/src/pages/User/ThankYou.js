import React,{useState} from 'react';
import {Card, Button, ButtonGroup, Badge, Jumbotron, Container} from 'react-bootstrap';
import holder from '../images/item.png';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

export const ThankYou = (props) => {


    return (
        <Jumbotron fluid>
            <Container>
                <h1>Thank you for purchasing </h1>
                <p>
                    You can follow up the status of your order here.
                </p>
            </Container>
        </Jumbotron>
    )
}