import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Animecard from './Animecard';

function fantasy() {
  const [fantasy, setFantasy] = useState([]);
  const FantasyUrl = "http://localhost:4000/Fantasy";

    useEffect (() => {
        axios
        .get(FantasyUrl)
        .then((res) => {
            // console.log(res.data);  
            setFantasy(res.data);   
        })
        .catch((err) => console.log(err));
    },[])
  return (
    <div className='title'>
        <h3>Fantasy</h3>
        <Animecard Animecard = {fantasy}/>
    </div>
  )
}

export default fantasy
