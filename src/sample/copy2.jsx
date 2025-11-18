import React, { useState } from 'react'
import Log from './singin'
import './App.css'

function App() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [repassword, setRePassword] = useState("")
  
  const [user, setUser] = useState([]); 

  const addTask = (newTask)=>{
    setUser([...user, newTask]);
    setEmail("");
    setPassword("");
    setRePassword("");
  }

  const deleteTask = (id) =>{ 
    setUser(user.filter((task) => task.id !== id))
  };

  return (
    <div className="container">
      <Log
        email = {email}
        setEmail = {setEmail}
        password = {password}
        setPassword = {setPassword}
        repassword = {repassword}
        setRePassword = {setRePassword}
        user = {user}
        setUser = {setUser}
        addTask = {addTask}
        deleteTask = {deleteTask}
      />
    </div>
  )
}

export default App


// .container{
//     /* margin: 0 auto; */
//     /* padding: 2rem; */
//     border: 2px solid black;
//     /* text-align: center; */
//     background-color: rgb(212, 173, 173);
//     /* height: 80px; */
//     display: flex;
//     justify-content: center;
//     gap: 10px;
// }
// button{
//     margin: 5px;
//     padding: 10px;
//     background-color: blue;
//     color: rgb(253, 253, 253);
//     border-radius: 5px;
//     cursor: pointer;
// }
// input{
//     border: 2px solid black;
//     width: 250px;
//     height: 40px;
//     margin: 10px;
//     display: flex;
// }
// .l2{
//     font-family: cursive;
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     justify-content: center;
//     gap: 5px;
// }
// .l3{
//     align-items: center;
//     justify-content: center;
//     display: flex;
//     flex-direction: column;
// }
// .l4{
//     justify-content: center;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
// }
// ul{
//     list-style-type: none;
//     justify-content: center;
//     align-items: center;
//     padding-left: 50px;
// }
// .log2{
//     display: flex;
//     gap: 10px;
// }