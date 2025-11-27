import React from 'react'
import "../css/News.css";


function News() {
  return (
    <div className='news-comtainer'>
      <h2 className="news-h2" style={{ color: "white" }}>
        New anime in 2025: the biggest upcoming and ongoing shows
      </h2>


      <div className='demon'>
        <h2>Demon Slayer: Infinity Castle becomes highest-grossing anime film ever</h2>
        <div className='news-img'>
            <img src="/anime-img/d1.jpg"/>
            <img src="/anime-img/d2.png"/>
            <img src="/anime-img/d3.png"/>
        </div>
        <h4>Summary:</h4>
        <p>The film has now officially grossed approximately $555 million, surpassing its predecessor and setting a new record for anime films worldwide.</p>
        <p>It reflects the increasing global influence of anime at the box-office level.</p>
        <p>The streaming/onscreen release strategy is being emphasised—fans are encouraged to see it in theatres before 2026</p>
      </div>

      <div  className='demon'>
        <h2>Jujutsu Kaisen Season 3 confirmed for 2026</h2>
        <div className='news-img'>
            <img src="/anime-img/d4.png"/>
            <img src="/anime-img/d5.png"/>
            <img src="/anime-img/d6.png"/>
        </div>
         <h4>Summary:</h4>
        <p>*During Anime Expo 2025, it was officially announced that Season 3 of “Jujutsu Kaisen” will not be released in 2025, but will debut in 2026.</p>
        <p>*While the wait is longer than many fans hoped, the production team emphasises higher quality and more intense visuals</p>
        <p>*It shows that big-budget anime are increasingly spacing out releases to ensure quality and hype.</p>
      </div>

      <div  className='demon'>
        <h2>Sakamoto Days becomes Netflix’s most-watched anime of 2025</h2>
        <div className='news-img'>
            <img src="/anime-img/d7.png"/>
            <img src="/anime-img/d8.png"/>
            <img src="/anime-img/d9.png"/>
        </div>
         <h4>Summary:</h4>
        <p>According to reports, Sakamoto Days achieved higher streaming numbers on Netflix than prominent titles like Naruto and Demon Slayer, making it a major anime hit this year.</p>
      </div>

      <div  className='demon'>
        <h2>Chainsaw Man - The Movie: Reze Arc – Upcoming Film Release</h2>
        <div className='news-img'>
            <img src="/anime-img/d10.png"/>
            <img src="/anime-img/d11.png"/>
            <img src="/anime-img/d12.png"/>
        </div>
         <h4>Summary:</h4>
        <p>A full-length film sequel to Chainsaw Man, called Reze Arc, is set to release in U.S. theaters on October 24, 2025</p>
        <p>This film continues the story from the first season of the anime and will focus on a new arc from the manga, making it essential viewing for fans of the series</p>
      </div>
    </div>
  )
}

export default News
