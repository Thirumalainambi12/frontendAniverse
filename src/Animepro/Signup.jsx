import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import bcrypt from 'bcryptjs';
import { useNavigate, Link } from 'react-router-dom';
import "../css/Signup.css"

function signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [users, setUsers] = useState([]);
    const url = "http://localhost:4000/Users";
    const hashedpass = bcrypt.hashSync(password, 10);

    const navigate = useNavigate();

    const handleSignup = (newUser) => {
        if(!name|| !email || !password || ! confirmPassword){
            alert("Plaese fill all the fields");
            return false;
        } 
        if(password !== confirmPassword){
            alert("Password not match");
            return;
        }
        const matchUser = users.filter((user) => user.name === name && user.email == email);
        if(matchUser.length > 0)
        {
            alert("User alredy registered");
            return false;
        }
        axios.post(url, newUser)
        .then((res) => {   
            setUsers([...users, newUser]);
            setName("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
            alert("Signup successful");
            navigate('/Signin');
        })
        .catch((err) => {
            alert("Error during signup: " + err.message);
        })
    }
  return (
    <div className="signup-container">
        <h2>Aniverse</h2>
         
        <div className='signup'>
            <h3>Create Account</h3>
            <input type="text" placeholder='Username' onChange={(e) => setName(e.target.value)}/>
            <br /> 
            <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
            <br />
            <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
            <br />
            <input type="password" placeholder='Confirm Password' onChange={(e) => setConfirmPassword(e.target.value)}/>
            <br />
            <button onClick={()=> handleSignup({id: `${+new Date()}` ,name:name, password:hashedpass, email:email})}>Signup</button>
            <div className='link-to-signup'>
                <p>Already have an account?</p>
                <Link to={"/Signin"}>Log In</Link>
            </div>
        </div>    
    </div>
  )
}

export default signup
