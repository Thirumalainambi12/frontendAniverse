import React, { useState } from 'react'
import "../css/App.css";
import Signin from './Signin'
import Signup from './Signup'
import Login from './Login'
import Header from './Header';
import Home from './Home' 
import Popular from './Popular';
import News from './News';
import Categories from './Categories';
import  Action from './Action'
import Comedy from './Comedy'
import Fantasy from './fantasy'
import Romance from './Romance'
import Drama from './Drama'
import Video from './Video';
import Premium from './Premium';
import { Route, Routes, Navigate } from 'react-router-dom'
import { AppContext } from "../Context.jsx/AppContext.jsx";
import PrivateRouter from './PrivateRoute';
import Search from './Search';
import Bookmark from './Bookmark';
import Payment from './Payment';
import Profile from './Profile';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAllow, setIsAllow] = useState(false);

  const [bookmark, setBookMark] = useState([]);
  const [count, setCount] = useState(0);

  const [userData, setUserData] = useState(null);

  const [search, setSearch] = useState("");

  const AddToBookmark = (item) => {
    setBookMark([...bookmark, item]);
    setCount(count + 1);
  };

  const RemoveToBookMark = (item) => {
    setBookMark(bookmark.filter(b => b.id !== item.id));
    setCount(count - 1);
  };

  return (
    <AppContext.Provider value={{isLoggedIn, setIsLoggedIn, isAllow, setIsAllow, AddToBookmark, RemoveToBookMark, bookmark, setBookMark, userData, setUserData , search, setSearch}}>
      <div className='container'>

        {isLoggedIn && <Header count={count}/>}

        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/Login' element={<Login />}/> 

          <Route path='/Signin' element={<Signin setIsLoggedIn={setIsLoggedIn} />} />
          <Route path='/Signup' element={<Signup/>}/>
          <Route path="/Home" element={<PrivateRouter isLoggedIn={isLoggedIn}><Home /></PrivateRouter>}/>
          <Route path="/Popular" element={<PrivateRouter isLoggedIn={isLoggedIn}><Popular /></PrivateRouter>}/>
          <Route path="/Categories" element={<PrivateRouter isLoggedIn={isLoggedIn}><Categories /></PrivateRouter>}/>
          <Route path="/Action" element={<PrivateRouter isLoggedIn={isLoggedIn}><Action /></PrivateRouter>}/>
          <Route path="/Drama" element={<PrivateRouter isLoggedIn={isLoggedIn}><Drama /></PrivateRouter>}/>
          <Route path="/Comedy" element={<PrivateRouter isLoggedIn={isLoggedIn}><Comedy /></PrivateRouter>}/>
          <Route path="/Fantasy" element={<PrivateRouter isLoggedIn={isLoggedIn}><Fantasy /></PrivateRouter>}/>
          <Route path="/Romance" element={<PrivateRouter isLoggedIn={isLoggedIn}><Romance /></PrivateRouter>}/>
          <Route path="/:Genre/:id" element={<PrivateRouter isLoggedIn={isLoggedIn}><Video AddToBookmark ={AddToBookmark} /></PrivateRouter>}/>
          <Route path="/News" element={<PrivateRouter isLoggedIn={isLoggedIn}><News /></PrivateRouter>}/>
          <Route path="/Search" element={<PrivateRouter isLoggedIn={isLoggedIn}><Search /></PrivateRouter>}/>
          <Route path="/Premium" element={<PrivateRouter isLoggedIn={isLoggedIn}><Premium /></PrivateRouter>}/>
          <Route path="/Bookmark" element={<PrivateRouter isLoggedIn={isLoggedIn}><Bookmark /></PrivateRouter>}/>
          <Route path="/Payment" element={<PrivateRouter isLoggedIn={isLoggedIn}><Payment /></PrivateRouter>}/>
          <Route path="/Profile" element={<PrivateRouter isLoggedIn={isLoggedIn}><Profile /></PrivateRouter>}/>
        </Routes>
        <div className='footer'>
          <h4>© Aniverse, LLC — All Rights Reserved</h4>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-solid fa-envelope"></i>
          <i className="fa-brands fa-instagram"></i>
        </div>
      </div>
    </AppContext.Provider>
  )
}

export default App
