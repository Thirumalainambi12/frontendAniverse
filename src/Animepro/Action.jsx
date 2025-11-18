import React,{useEffect, useState} from 'react'
import axios from 'axios';
import Animecard from './Animecard';

function Action() {
    const [action, setAction] = useState([]);
    const ActionUrl = "http://localhost:4000/Action";

    useEffect (() => {
        axios
            .get(ActionUrl)
            .then((res) => {
            // console.log(res.data);  
            setAction(res.data);   
        })
        .catch((err) => console.log(err));
    },[])
  return (
    <div>
        <h3>Action</h3>
        <Animecard Animecard = {action}/>
    </div>
  )
}

export default Action
