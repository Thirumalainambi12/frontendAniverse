import React,{useContext, useState, useEffect} from 'react'
import { AppContext } from "../Context.jsx/AppContext"
import axios from 'axios';
import { Link } from 'react-router-dom';
import "../css/Search.css";


function Search() {
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
