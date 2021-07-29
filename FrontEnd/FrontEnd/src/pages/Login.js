import React,{useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

export const Login = (props) => {

    const [user,setUser]=useState({username:"",password:""});
    const [error,setError]=useState("");
    const currentUser = useSelector(state => state.currentUser);
    const dispatch = useDispatch();
    console.log(props)
    const testh  = (e) => {
        console.log(currentUser)
    }
    const handlesubmit  = (e) => {
        e.preventDefault();
        dispatch({ type : "authenticate",user: user,props:props});
        if(currentUser.length>0)
            props.history.push("/welcome")
        else
            setError("Wrong username/Password combination, please try again")
    }
    const handleFieldChange = e =>{
        setUser({...user,[e.target.name]: e.target.value });
    }

    return (
        <>
            <div>{error}</div>
        <h1>Login</h1>
            <form onSubmit={handlesubmit}>
                <div>Username <input type="text" name="username" id="username" onChange={handleFieldChange}/></div>
                <div>Password <input type="password"  name="password" id="password" onChange={handleFieldChange}/></div>
                <input type="submit" value="Login"/>
                <button onClick={()=>props.history.push("/create")}>Create Account</button>
                <button onClick={testh}>Create Account</button>
            </form>
        </>
    )
}