import { useState } from "react"
import './App.css'
import Test from "./Test";
import Button from "./Button";
import Status from "./Status";


function App() {

  const [name1, setName] = useState("")
  const handleLogClick = ()=> {
    alert("You have clicked Add!")
    };

    const handleEvent = (e)=> {
      console.log("Gotcha: ",setName (e.target.value));
      // setName(e.target.value);
    };

    const sayHello = () =>{
      alert("Invalid synax");
    }

    const [isLog, setIsLog] = useState(false)

    const setLogin = ()=>{
      setIsLog(true);
    };

    const setLogout = ()=>{
      setIsLog(false);
    };

  return (

    <div className="container">
      <input type="text" value={name1} onChange={(e) => {handleEvent(e)}} /> 

      <button onClick={() => {alert("Alert Invalid")>("You have clicked Add!")}}>Add</button> 
      <button onClick={() => {handleLogClick()}}>Log</button>

      <Test name={name1} alert={sayHello} ></Test>

      {(isLog) ? <Button  click = {setLogout}>Logout</Button> :
      <Button click = {setLogin}>Login</Button>
      }

      <Status isLog={isLog}/>

    </div>
  )
}

export default App



// #css

// .container{
//     margin: 0 auto;
//     padding: 2rem;
//     border: 2px solid black;
//     text-align: center;
//     background-color: aquamarine;
//     /* height: 80px; */
//     display: flex;
//     /* flex-direction: column; */
//     justify-content: center;
//     gap: 10px;
// }
// input{
//     border: 2px solid black;
//     width: 30%;
//     height: 30px;
// }
// button{
//     background-color: blue;
//     color: aliceblue;
//     height: 30px;
//     align-items: center;
//     display: flex;
// }
// .status{
//     height: 20px;
//     width: 20px;
//     border-radius: 50px;
//     border: 2px solid black;

// }
// .active{
//     background-color: green;
// }
// .inactive{
//     background-color: gray;
// }
// .statusContainer{
//     display: flex;
//     justify-content: center;
//     align-items: center;
// }
