import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Animecard from './Animecard';

function Comedy() {
  const [comedy, setComedy] = useState([]);
  const Comedyurl = "https://backendjsondb-tp7v.onrender.com/Comedy";

    useEffect (() => {
        axios
        .get(Comedyurl)
        .then((res) => {
            // console.log(res.data);  
            setComedy(res.data);   
        })
        .catch((err) => console.log(err));
    },[])
  return (
    <div>
      <div className='title'>
        <h3>Comedy</h3>
        <Animecard Animecard = {comedy}/>
      </div>
    </div>
  )
}

export default Comedy
