import React from 'react'
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Payment from './Payment';

function Premium() {
    const [year, setYear] = useState(false);
    const navigate = useNavigate("");


    const month = (id) =>{
        navigate("/Payment")
    }

  return (
    <div className='package'>
        <div className='upgrade'>
            <i className="fa-solid fa-crown fa-2x"></i>
            <h2>Upgrade your plan</h2>
        </div>
        <div className='pack'>
            <h3 onClick={()=> setYear(false)}>Monthly</h3> 
                <div onClick={()=> setYear(true)}>
                    <h3>yearly(SAVE UP TO 60%)</h3>
                </div>
        </div>
        <div className='all pack'>
            <div className='monthly'>
                <h4>Otaku Starter</h4>
                <p>{year ? "₹375/yr (60% OFF)" : "₹79/month"}</p>
                <Link to="/Home"><button>Start 7-Day Free Trial</button></Link>
                <Link to="/Home" className="skip">Skip Free Trial</Link>
                <div className="sec-3">
                    <p>* 500+ anime titles</p>
                    <p>* Weekly new episodes</p>
                    <p>* Dual audio (JP & ENG)</p>
                    <p>* HD streaming (720p)</p>
                    <p>* Short skippable ads</p>
                </div>
                <button onClick={()=>month(1)}>
                    Subscription
                </button>

            </div>
            <div className='yearly'>
                <p>Most Popular</p>
                <h4>Mega Fan</h4>
                <p>{year ? "₹475/yr (60% OFF)" : "₹99/month"}</p>
                <Link to="/Home"><button>Start 7-Day Free Trial</button></Link>
                <Link to="/Home" className="skip">Skip Free Trial</Link>
                <div className="sec-3">
                    <p>* Full library + movies</p>
                    <p>* 4K & offline downloads</p>
                    <p>* Watch on 4 devices</p>
                    <p>* Early releases & exclusives</p>
                </div>
                <button onClick={()=>month(2)}>
                    Subscription
                </button>
            </div>
        </div>
    </div>
    
  )
}

export default Premium
