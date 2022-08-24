import React from 'react';
import { useState } from 'react';

function LoginForm() {
    const [fullname, setfullname] = useState({
        fname: "",
        lname: "",
        email: "",
        number: "",
        Qualification: "",
    });

    const Text = (e) => {
        const { value, name } = e.target;

        setfullname((prevalue) => {
            return {
                ...prevalue,
                [name]: value,
            }
        })
    };

    const onSubmit = (event) => {
        event.preventDefault();
        alert("form Submitted")
    };

    return ( <>
        <form onSubmit = { onSubmit } >
        <div>
        <h1 > Hello { fullname.fname } { fullname.lname } </h1>  
        <p > { fullname.email } </p>  
        <p > { fullname.number } </p>  
        <p > { fullname.Qualification } </p> 
        <input type = "text"
        placeholder = 'Enter FirstName'
        onChange = { Text }
        name = "fname"
        value = { fullname.fname }
        autoComplete = "off" / >

        <br/>

        <input type = "text"
        placeholder = 'Enter LastName'
        onChange = { Text }
        name = "lname"
        value = { fullname.lname }
        autoComplete = "off"/>

        <br/>

        <input type = "text"
        placeholder = 'Enter Email'
        onChange = { Text }
        name = "email"
        value = { fullname.email }
        autoComplete = "off"/>

        <br/>

        <input type = "text"
        placeholder = 'Enter Phone Number'
        onChange = { Text }
        name = "number"
        value = { fullname.number }
        autoComplete = "off" />

        <br />

        <input type = "text"
        placeholder = 'Enter Phone Qualification'
        onChange = { Text }
        name = "Qualification"
        value = { fullname.Qualification }
        autoComplete = "off"/>


        <button type = 'submit'> Click Me </button> 
        </div> 
        </form>

        </>
    );
}

export default LoginForm;