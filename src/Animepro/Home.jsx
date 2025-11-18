import React, { useEffect, useState, useContext} from 'react'
import { AppContext } from "../Context.jsx/AppContext";
import "../css/Home.css";
import axios from 'axios';
import Animecard from './Animecard';

function Home() {
  const state = useContext(AppContext);
  
  const [free, setFree] = useState([]);
  const freeurl = "http://localhost:4000/Free"
  useEffect (() => {
    axios
      .get(freeurl)
      .then((res) => {
        // console.log(res.data);  
        setFree(res.data);   
      })
      .catch((err) => console.log(err));
  },[])

  const [action, setAction] = useState([]);
  const ActionUrl = "http://localhost:4000/Action";

  const [drama, setDrama]= useState([]);
  const DramaUrl = "http://localhost:4000/Drama";

  const [comedy, setComedy] = useState([]);
  const Comedyurl = "http://localhost:4000/Comedy";

  const [fantasy, setFantasy] = useState([]);
  const FantasyUrl = "http://localhost:4000/Fantasy";

  const [romance, setRomance] = useState([]);
  const RomanceUrl = "http://localhost:4000/Romance";


  useEffect (() => {
    axios
      .get(ActionUrl)
      .then((res) => { 
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

  const [img, setImg] = useState(0);
  const homeImg = [
    "/anime-img/frontjuju.png.jpg",
    "/anime-img/frontonepiece.png.jpg",
    "/anime-img/frontgaitama.png.jpg",
    "/anime-img/frontzero.png.jpg"
  ]
  useEffect(() => {
  const delay = setInterval(() => {
    setImg((img) => (img + 1) % homeImg.length);
  }, 4000); 

  return () => clearInterval(delay); 
}, []);



  return (
    <div className='Home-container'>
      <div className='head-img'>
        <img src={homeImg[img]}/>
      </div>
      <div className='sub-head'>
        <h2>New worlds stream here.</h2>
        <p>From the latest simulcasts to timeless legends</p>
      </div>

      <div className='title'>
        <h3>Free Trail video</h3>
        <Animecard Genre = "free" freecard = {free}/>
      </div>
     <div className='title'>
        <h3>Action</h3>
        <Animecard Genre = "action" Animecard = {action}/>
      </div>
      <div className='title'>
        <h3>Drama</h3>
        <Animecard Genre = "drama" Animecard = {drama}/>
      </div>
      <div className='title'>
        <h3>Comedy</h3>
        <Animecard Genre = "comedy" Animecard = {comedy}/>
      </div>
      <div className='title'>
        <h3>Romance</h3>
        <Animecard Genre = "romance" Animecard = {romance}/>
      </div>
      <div className='title'>
        <h3>Fantasy</h3>
        <Animecard Genre = "fantasy" Animecard = {fantasy}/>
      </div>
    </div>
  )
}

export default Home
