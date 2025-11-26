import React,{useContext, useState, useEffect} from 'react'
import { AppContext } from "../Context.jsx/AppContext"
import axios from 'axios';
import { Link } from 'react-router-dom';
import "../css/Search.css";


function Search() {
  const state = useContext(AppContext);

  const [free, setFree] = useState([]);
  const freeurl = "https://backendjsondb-tp7v.onrender.com/Free"
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

  const allData = [...free, ...action, ...drama, ...romance, ...comedy, ...fantasy];

  const filterData = allData.filter((item) =>
  (item?.name || item?.title || "").toLowerCase().includes(state.search.toLowerCase())
);


// console.log("AllData:", allData);

  return (
    <div className='search-container'>
      {
        filterData.length > 0 ? (
          filterData.map((item) => (
            <div key={item.id}>
              <Link to={`/${item.Genre}/${item.id}`}>
                <img src={item.img} alt={item.name || item.title} />
              </Link>
            </div>
          ))
          ) : (
            <p>No result found</p>
        )
      }
    </div>
  )
}

export default Search
