import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Animecard from './Animecard';

function Comedy() {
  const [comedy, setComedy] = useState([]);
  const Comedyurl = "http://localhost:4000/Comedy";

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
      <div>
        <h3>Comedy</h3>
        <Animecard Animecard = {comedy}/>
      </div>
    </div>
  )
}

export default Comedy
