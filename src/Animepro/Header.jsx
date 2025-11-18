import React,{useContext} from "react";
import "../css/Navigate.css";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../Context.jsx/AppContext"


function Header({count}) {
  const state = useContext(AppContext);
  const navigate = useNavigate("");

  const handleSearchClick = () => {
    if (state.search.trim() !== "") {
      navigate("/Search"); 
    }
  };
  return (
    <div className="navigate-container">
      <div className="nav-header">
        <div>
          <h1>Aniverse</h1>

          <Link to="/Home"><h2>Home</h2></Link>
          <Link to="/popular"><h2>Popular</h2></Link>

          <div className="nav-item categories">
            <h2>Categories ▾</h2>
            <div className="dropdown">
              <Link to="Action">Action</Link>
              <Link to="Drama">Drama</Link>
              <Link to="Comedy">Comedy</Link>
              <Link to="Fantasy">Fantasy</Link>
              <Link to="Romance">Romance</Link>
            </div>
          </div>

          <Link to="/News"><h2>News</h2></Link>

          <div className="search">
            <input
              type="text"
              placeholder="Find your favorite anime..."
              value={state.search}
              onChange={(e) => state.setSearch(e.target.value)}/>
            <i
              className="fa-solid fa-magnifying-glass"
              onClick={handleSearchClick}
              style={{ cursor: "pointer" }}
            ></i>
          </div>

          <Link to="/Bookmark">
            <i className="fa-solid fa-bookmark"></i><span>({count})</span>
          </Link>

          <div className="bttn">
            <i className="fa-solid fa-crown"></i>
            <Link to="/Premium"><button>Premium</button></Link>
          </div>

          <Link to='/Profile'>
            <div className="logout"> 
            <img src="/action/onepi.png.jpg" alt="One Piece" />
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
