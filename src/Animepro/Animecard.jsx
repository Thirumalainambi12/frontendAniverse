import React, { useContext } from "react";
import { AppContext } from "../Context.jsx/AppContext";
import { Link } from "react-router-dom";

function Animecard({ Genre, freecard, Animecard }) {
  const state = useContext(AppContext);

  return (
    <div className="an-card">
      {freecard?.map((free) => (
        <div key={free.id} className="anii-card">
          <Link to={`/${Genre}/${free.id}`}>
            <img src={free.img} alt={free.name} />
          </Link>
          <i className="fa-solid fa-bookmark" onClick={()=>state.AddToBookmark(free)}></i>
        </div>
      ))}


      {Animecard?.map((ani) => (
        <div key={ani.id} className="anii-card">
          {state.isAllow ? (
            <Link to={`/${Genre}/${ani.id}`}>
              <img src={ani.img} alt={ani.name} />
            </Link>
            
          ) : (
            <div
              onClick={() => {
                alert("Premium content! Please upgrade to access");
              }}
            >
              <img src={ani.img} alt={ani.name} />
              <i className="fa-solid fa-bookmark" onClick={()=>state.AddToBookmark(free)}></i>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Animecard;
