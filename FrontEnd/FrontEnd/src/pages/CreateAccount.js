import React,{useState} from 'react';
import {useDispatch} from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button} from 'react-bootstrap'
export const CreateAccount = (props) => {


    const [user,setUser]=useState()
    const dispatch = useDispatch();

    const handlesubmit  = (e) => {
        e.preventDefault();
        dispatch({ type : "register",user: user});
        props.history.push("/login")
    }
    const handleFieldChange = e =>{
        setUser({...user,[e.target.name]: e.target.value });
    }

    return (
        <>
            <h1>Create accounts</h1>
            <form onSubmit={handlesubmit}>
                <div>Username <input type="text" name="username" id="username" onChange={handleFieldChange}/></div>
                <div>Password <input type="password"  name="password" id="password" onChange={handleFieldChange}/></div>
                <input type="submit" id="submit" value="createAccount"/>
                <Button>this good</Button>
            </form>
        </>

    )
}