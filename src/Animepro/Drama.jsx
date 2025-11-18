import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Animecard from './Animecard';

function Drama() {
    const [drama, setDrama]= useState([]);
    const DramaUrl = "http://localhost:4000/Drama";
    useEffect (() => {
        axios
        .get(DramaUrl)
        .then((res) => {
            // console.log(res.data);  
            setDrama(res.data);   
        })
        .catch((err) => console.log(err));
    },[])
  return (
    <div>
        <h3>Drama</h3>
        <Animecard Animecard = {drama}/>
    </div>
  )
}

export default Drama
