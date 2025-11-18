import React, { useState } from 'react'

function Log({email, setEmail, password, setPassword, repassword, setRePassword, user, setUser, addTask, deleteTask}) {
  
  const [isDisable, setIsDisable] = useState(false);

  const handleEdit = () =>{
    setIsDisable(false);
  }
  const handleSave = () =>{
    setIsDisable(true);
  }
  const editTask =(taskId, newValue) =>{
    setUser(user.map((user) => user.id === taskId ? {...user, name:newValue} : user));
  }

  
  return (
    <div className='Log1'>
      <div className='l2'>
        <i className="fa-brands fa-square-facebook fa-3x"></i>
        <h1>Facebook</h1>
      </div>

    <div className='l3'>
          <input type='text' 
          placeholder='Phone number or E-mail' value={email} onChange={(e) => setEmail(e.target.value)}/>
          <input type='text' 
          placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)}/>
          <input type='text' placeholder='Re-enter password'
          value={repassword} onChange={(e) => setRePassword(e.target.value)}/>
    </div>

    <div className='l4'>
        <div>
          <button onClick={()=>addTask({id:+new Date(), email:email, password: password, repassword: repassword})}>
            Sing in</button>
        </div>
        <div>
          <h5>Register?</h5>
        </div>
    </div>
    <div>
      <ul>
      {
        user.map(
          (task, index) => (
            <li key={index}>
              <div className='log2'>
              <input type='text' value={task.email} disabled={setIsDisable} onChange={ (e) => {task.email = e.target.value}}/>
              <input type='text' value={task.password} disabled={isDisable} onChange={ (e) => {task.password = e.target.value}}/>  
              <input type='text' value={task.repassword} disabled={isDisable} onChange={ (e) => {task.repassword = e.target.value}}/>  
              {isDisable && <button onClick={() => editTask(false)}>Edit</button> }
              {! isDisable && <button onClick={() => saveTask(true)}>Save</button> }
              <button onClick={() => deleteTask(task.id)}>Delete</button> 
              </div>
            </li>
           ) )
      }
    </ul>
    </div>
    </div>
  )
}

export default Log



// import React, {useState} from 'react'
// import './App.css'
// import Order from './order'


// function App() {

//   const cars = () => {
//     console.log( "Honda City", "price: 15L" )
//   }




//   return (
//     <div className='container'>
//       <Order
//       cars = {cars}
//       // setCar = {setCar}
//       />
//     </div>
//   )
// }

// export default App


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