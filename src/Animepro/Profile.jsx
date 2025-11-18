import React,{useContext} from 'react'
import { AppContext } from "../Context.jsx/AppContext";
import "../css/Profile.css";

function Profile() {
    const state = useContext(AppContext);

    const Signout = () => {
        state.setIsLoggedIn(false);
        
     }
  return (
    <div className='profile-container'>
        <h2>Account</h2>
        {
        state.userData ? (
            <div className="profile-name"> 
                <img src="/action/onepi.png.jpg" alt="One Piece" />
                <h3>{state.userData.name}</h3>
            </div>
        ) : (
        <p>No user logged in</p>
        )}
        <div className='log-butn'>
           <i className="fa-solid fa-right-from-bracket"></i>
            <button onClick={Signout}>Signout</button> 
        </div>  
    </div>
  )
}

export default Profile
