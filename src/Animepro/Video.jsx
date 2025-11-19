import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/Video.css";

function Video() {
  const { Genre, id } = useParams();
  const [video, setVideo] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
  const fixedGenre = Genre.charAt(0).toUpperCase() + Genre.slice(1);
    axios
      .get(`http://localhost:4000/${fixedGenre}/${id}`)
      .then((res) => setVideo(res.data))
      .catch(() => setVideo(null));
  }, [Genre, id]);


  if (!video) {
    return (
      <div>
        <h3>Anime Not Found</h3>
        <button onClick={() => navigate(-1)}>⬅ Back</button>
      </div>
    );
  }

  return (
    <div className="video-container">
      <button onClick={() => navigate(-1)}>⬅ Back</button>
      <h2>{video.name}</h2>
      <video width="900" height="450" controls autoPlay>
        <source src={video.video} type="video/mp4" />
      </video>
      <p>Summary: {video.description}</p>
    </div>
  );
}

export default Video;
