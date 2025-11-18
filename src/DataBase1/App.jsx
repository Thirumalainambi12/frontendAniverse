import axios from 'axios'
import React, { useState } from 'react' 
import './App.css'

function App() {

    
    const [newTask, setNewTask] = useState("");
    const url = "http://localhost:4000/Data"

    const [tasks, setTasks] = useState([]);
    const [msg, setMsg] = useState("");
    const [error, setError] = useState("");
    
    const addTasks = (postNewTask) => {
      if (!newTask) {
        setMsg("");
        setError ("Enter the data");
        return false;
      };
        axios.post(url,postNewTask)
        .then(() => {
          setTasks([...tasks, postNewTask])
          setMsg("Data added successfully");
          setError("");
          setNewTask(""); 
        })
        .catch(err => 
          {
          console.log(err)
          setError(err.message);
          setMsg("");
         }
      )
    };

    const readTasks  = () =>{
        axios.get(url)
        .then(res => 
        {
          setTasks(res.data)
          setMsg("Data Scuccessfully");
          setError("");
        })
          .catch(err => 
            {
              console.log(err)
            setError("No data found");
            setMsg("");
          })
    };

    const deleteTasks = (id) => {
        axios.delete(`${url}/${id}`)
        .then(res => 
          {
          setTasks(tasks.filter(datass => datass.id !== id))
          setMsg("Data deleted successfully");
          setError("");
        })
        .catch(err =>
        { 
          setError(err.message);
          setMsg("");
        }); 
    };

    const editTasks = (e,id) => {
      const editTasks = tasks.map((datas) => {
        if(datas.id === id){
          datas.taskName = e.target.value
        }
        return datas;
        }
      );
        setTasks(editTasks);
      };

      const updateTasks = (putData) => {
        axios.put(`${url}/${putData.id}`, {taskName: putData.tasks})
        .then(() => {
          setMsg("Data updated succesfully");
          setError("");
        })
        .catch((err) => {
          // console.log(err)
          setError(err.message);
          setMsg(""); 
        })
      };

  return (
    <div className='container'>
      <h1>App component</h1>

    <input type='text' placeholder='Add Task' value={newTask} onChange={(e) => setNewTask(e.target.value)}/>
    <button onClick={()=>addTasks({id: `${+new Date()}`, taskName:newTask})}>Add</button>


      <button onClick={readTasks}>Data</button>

      {msg && <p className="msg">{msg}</p>}
      {error && <p className="error">{error}</p>}

        <ul>{
            tasks.map(datass => (
                <li key = {datass.id} > 
                <input type='text' value={datass.taskName} onChange={(e)=>editTasks(e,datass.id)}/>
                <button onClick={()=> updateTasks({id:datass.id, tasksName: datass.taskName})}>Update</button>
                <button onClick={()=>deleteTasks(datass.id)}>Delete</button>
                </li>
            ))
        }
        </ul>

    </div>
  )
}

export default App
