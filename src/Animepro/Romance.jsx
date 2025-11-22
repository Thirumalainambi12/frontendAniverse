import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Animecard from './Animecard';

function Romance() {
  const [romance, setRomance] = useState([]);
  const RomanceUrl = "http://localhost:4000/Romance";

    useEffect (() => {
        axios
        .get(RomanceUrl)
        .then((res) => {
            // console.log(res.data);  
            setRomance(res.data);   
        })
        .catch((err) => console.log(err));
    },[])
  return (
    <div className='title'>
        <h3>Romance</h3>
        <Animecard Animecard = {romance}/>
    </div>
  )
}

export default Romance
