import React, { useState } from 'react'
import axios from 'axios';
import './App.css'
// import Front from '../Front';
// import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';

function App() {

  const [tasks, setTasks] = useState([]);
  const url = "http://localhost:4001/Data";

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");

  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");

  // const navigator = useNavigate();

  const addTask = (printData) => {
    if(!name || !password || !repassword){
      setMsg("");
      setError("Enter the data");
      return false;
    }
    axios.post(url,printData)
    .then(() => {
      setTasks([...tasks, printData])
      setName("");
      setPassword("");
      setRepassword("");
    })
    .catch(err => {
      console.log(err)
      setError(err.message);
      setMsg("");
  })
  } 

  const readTasks = () => {
    axios.get(url)
    .then(res => 
      {
        setTasks(res.data)
        setMsg("Data successfully");
        setError("");
      })
    .catch(err => {
      setError(err.message);
      setMessage("");
    })
  }

  const editName = (e, id) => {
    const editName = tasks.map((data) => {
      if (data.id === id) {
        data.name = e.target.value;
      }
      return data;
  });
  setTasks(editName);
  };
    const editpass = (e, id) => {
      const editPass = tasks.map((data) => {
        if (data.id === id) {
         data.password = e.target.value;
        }
        return data;
  });
  setTasks(editPass);
  };
    const editRepassword = (e, id) => {
    const editRepass = tasks.map((data) => {
      if (data.id === id) {
        data.repassword = e.target.value;
      }
      return data;
  });
  setTasks(editRepass);
  };


  const updateTasks = (putData) => {
    axios.put(`${url}/${putData.id}`, {
      name: putData.name,
      password: putData.password, 
      repassword: putData.repassword
    })
    .then(res => {
      setMsg("Data updated successfully");
      setError("");
    })
    .catch(err => {
      // console.log(err)
      setError(err.message);
      setMsg("");
  })
  };

  const deleteTasks = (id) => {
    axios.delete(`${url}/${id}`)
    .then(res => {
      setTasks(tasks.filter(datas => datas.id !== id))
      setMsg("Data deleted successfully");
      setError("");
    })
    .catch(err => {
      // console.log(err)
      setError(err.message);
      setMsg("");
  })
  }

  return (
    <div className='container'>

      <h1>LoGiN</h1>

      {msg && <p className="msg">{msg}</p>}
      {error && <p className="error">{error}</p>}

      <div className='header'>
        <input type='text' placeholder='Username' value={name} onChange={(e) => setName(e.target.value)}/>
        <input type='text' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
        <input type='text' placeholder='re-password' value={repassword} onChange={(e) => setRepassword(e.target.value)}/>
      </div>

      <button onClick={() => addTask({id: `${+new Date()}`, name:name, password:password, repassword:repassword })} >LoGiN</button>
      <button onClick={readTasks}>Show Data</button>

    <div className='map'>
      <ul>{
        tasks?.map((datas, index) => (
          <li key = {index} > 
          <input type='text' value={datas.name} onChange={(e)=>editName(e,datas.id)}/>
          <input type='text' value={datas.password} onChange={(e)=>editpass(e,datas.id)}/>
          <input type='text' value={datas.repassword} onChange={(e)=>editRepassword(e,datas.id)}/>
          <button onClick={() => updateTasks({id:datas.id, name:datas.name, password:datas.password, repassword:datas.repassword})}>Update</button>
          <button onClick={() => deleteTasks(datas.id)}>Delete</button>
          </li>
        ))
        }
      </ul>
    </div>
    </div>
  )
}

export default App 