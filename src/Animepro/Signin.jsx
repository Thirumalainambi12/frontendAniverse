import React, { useState, useContext } from 'react'
import axios from 'axios';
import bcrypt from 'bcryptjs';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from "../Context.jsx/AppContext";
import "../css/Sigin.css";


function Signin() {
  const state = useContext(AppContext);
  const[users,setUsers] = useState("");
  const url = "https://backendjsondb-tp7v.onrender.com/Users";

  const[name,setName] = useState("");
  const[password,setPassword] = useState("");

  const [msg,setMsg] = useState("");
  const [error,setError] = useState("");

  const navigate = useNavigate();

  const Login = () =>
    {
    if(!name ||  !password){
      setMsg("");
      setError("Enter the data");
      return ;
    }
    axios.get(url)
      .then((res) => {
        const allUsers = res.data;
        const user = allUsers.find (user => user.name === name);
        if(!user){
          setMsg("Invaild Username");
          return ;
        }
        bcrypt.compare(password, user.hashedpass || user.password, (err, isMatch) => {
          if (err) {
            setMsg("Something went wrong");
            return;
          }
          if(isMatch){
            alert("Login Successfully");
            state.setIsLoggedIn(true);
            state.setUserData(user)
            navigate("/Home");
          }
          else{
            setMsg("Invaild Password");
          }
      });
    })
    .catch((err) => {
      console.error(err);
      setMsg("");
      setError("Something went wrong while fetching users");
    });
  }
  return (
    <div className='signin-cotainer'>

      <h2>Aniverse</h2>

      {msg && <p> {msg} </p>}
      {error && <p> {error} </p>}

      <h3>Login</h3>
      <div className='form'>
        <input type="text" placeholder='Username' onChange={(e)=>setName(e.target.value)}/>
        <br />
        <input type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
        <br />
        <button onClick={Login}>Signin</button>
      </div>
      <div className='link-signup'>
        <p>Join the Aniverse community!</p>
        <Link to={"/Signup"}><p>Create Account</p></Link>
      </div>
    </div>
  )
}

export default Signin
