import { useState, useEffect } from 'react';
import Animecard from './Animecard';
import axios from 'axios';
import "../css/Anicard.css";


function Popular() {
  const [action, setAction] = useState([]);
  const ActionUrl = "https://backendjsondb-tp7v.onrender.com/Action";

  const [drama, setDrama]= useState([]);
  const DramaUrl = "https://backendjsondb-tp7v.onrender.com/Drama";

  const [comedy, setComedy] = useState([]);
  const Comedyurl = "https://backendjsondb-tp7v.onrender.com/Comedy";

  const [fantasy, setFantasy] = useState([]);
  const FantasyUrl = "https://backendjsondb-tp7v.onrender.com/Fantasy";

  const [romance, setRomance] = useState([]);
  const RomanceUrl = "https://backendjsondb-tp7v.onrender.com/Romance";


  useEffect (() => {
    axios
      .get(ActionUrl)
      .then((res) => {
        // console.log(res.data);  
        setAction(res.data);   
      })
      .catch((err) => console.log(err));
  },[])

  useEffect (() => {
    axios
      .get(DramaUrl)
      .then((res) => {
        // console.log(res.data);  
        setDrama(res.data);   
      })
      .catch((err) => console.log(err));
  },[])

  useEffect (() => {
    axios
      .get(Comedyurl)
      .then((res) => {
        // console.log(res.data);  
        setComedy(res.data);   
      })
      .catch((err) => console.log(err));
  },[])

  useEffect (() => {
    axios
      .get(FantasyUrl)
      .then((res) => {
        // console.log(res.data);  
        setFantasy(res.data);   
      })
      .catch((err) => console.log(err));
  },[])

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
    <div className='Polpular'>
      <div>
        <h2 style={{ color: "#7c16e2"}}>The Popular Anime</h2>
        <div className='pop-card'>
            <Animecard Animecard = {action}/>
            <Animecard Animecard = {drama}/>
            <Animecard Animecard = {comedy}/>
            <Animecard Animecard = {romance}/>
            <Animecard Animecard = {fantasy}/>
        </div>
      </div>
    </div>
  )
}

export default Popular
