import React, { useContext } from "react";
import { AppContext } from "../Context.jsx/AppContext";
import { Link } from "react-router-dom";
import "../css/Bookmark.css";

function Bookmark() {
  const state = useContext(AppContext);

  return (
    <div className="book-mark">
      <div className="watch-head">
        <h2>Add to watchList</h2>
      </div>

      <div>
        {state.bookmark.length === 0 ? (
          <h3>My Addlist is empty</h3>
        ) : (
          state.bookmark.map((itemm) => (
            <div key={itemm.id} className="bookmark-card">
              <Link to={`/${itemm.Genre}/${itemm.id}`} onClick={state.handlePremium}>
                <img src={itemm.img} alt={itemm.name} />
              </Link>

              <div>
                <i
                  className="fa-solid fa-circle-xmark"
                    onClick={() => state.RemoveToBookMark(itemm)}
                ></i>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Bookmark;
