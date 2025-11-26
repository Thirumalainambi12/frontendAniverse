import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import "../css/Login.css";



function Login() {
  const [animeData, setAnimeData] = useState([]);
  const url = "https://backendjsondb-tp7v.onrender.com/Login"

  const [year, setYear] = useState(false);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setAnimeData(data.Login || data || []))
      .catch(console.log);
    }, []);

  return (
    <div className='login-container'> 
        <div className='header'>
            <h2>Aniverse</h2> 
            <div>
              <Link to="/signin"><button >Login</button></Link>
              <Link to="/signin"><button >Start Free Trail</button></Link>
            </div>
        </div>
        <div className='video'>
          <video autoPlay loop muted  playsInline className="bg-video">
            <source src="/anime-img/logo.mp4" type="video/mp4" />
          </video>
          <div className='section1'>
            <h1>Unlimited Anime, TV Shows and More.</h1>
            <h1>The world’s largest dedicated Anime collection on demand</h1>
            <h2>Join Aniverse and discover the world of Anime</h2>
            <Link to="/signin"><button >Start 7-Days Free Trail</button></Link>
          </div>
        </div>

        <div className='package'>
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
            <Link to="/signin"><button>Start 7-Day Free Trial</button></Link>
            <Link to="/signin" className="skip">Skip Free Trial</Link>
            <div className="sec-3">
              <p>* 500+ anime titles</p>
              <p>* Weekly new episodes</p>
              <p>* Dual audio (JP & ENG)</p>
              <p>* HD streaming (720p)</p>
              <p>* Short skippable ads</p>
            </div>
          </div>
          <div className='yearly'>
            <p>Most Popular</p>
            <h4>Mega Fan</h4>
            <p>{year ? "₹475/yr (60% OFF)" : "₹99/month"}</p>
            <Link to="/signin"><button>Start 7-Day Free Trial</button></Link>
            <Link to="/signin" className="skip">Skip Free Trial</Link>
            <div className="sec-3">
              <p>* Full library + movies</p>
              <p>* 4K & offline downloads</p>
              <p>* Watch on 4 devices</p>
              <p>* Early releases & exclusives</p>
              <p>* Game Vault + VIP badge</p>
            </div>
          </div>
          </div>
        </div>

          <div>
            <h2>Be the First to Watch</h2>
            <h3>Stream full seasons of the top anime, simulcasts, Aniverse Originals, and more!</h3>
          </div>

          <div className='section3-anime'>
            {
              animeData.map((anime) => (
                <div key={anime.id}>
                  <img src={anime.img} alt={anime.title} />
                  <h3>{anime.name}</h3>
                  <p>Sub | Dub</p>
                </div>
            ))}
          </div>
        <div className='section4'>
          <h3>Already a Member?</h3>
          <Link to="/signin"><button >Login</button></Link>
          <Link to="/signin"><p>Or Create an Account for free!</p></Link>
        </div>

        <div className='section5'>
          <h3>Get More with Premium</h3>
          <p>Enjoy Aniverse entire library ad-free, including episodes shortly after being released in Japan.</p>
        </div>
        
        <div className='section6'>
            <div>
              <i className="fa-solid fa-volume-xmark"></i>
              <p>Ad-free streaming</p>
            </div>
            <div>
              <i className="fa-solid fa-folder-open"></i>
              <p>Complete access to Aniverse library</p>
            </div>
            <div>
              <i className="fa-solid fa-truck-fast"></i>
              <p>New episodes shortly after releasing in Japan</p>
            </div>
            <div>
              <i className="fa-solid fa-gamepad"></i>
              <p>Access to Aniverse Game Vault</p>
            </div>
            <div>
              <i className="fa-brands fa-youtube"></i>
              <p>Stream on a total of 6 devices at a time</p>
            </div>
            <div>
              <i className="fa-solid fa-download"></i>
              <p>Download HD videos</p>
            </div>
        </div>

        {/* <div className='footer'>
          <h4>© Aniverse, LLC — All Rights Reserved</h4>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-solid fa-envelope"></i>
          <i className="fa-brands fa-instagram"></i>
        </div> */}
    </div>
  )
}

export default Login