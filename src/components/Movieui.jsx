import React from "react";
import Movieimg from "../assets/movie.jpeg";
import Placeholderimg from "../assets/placeholder-image.png";
import { Link, useNavigate } from "react-router-dom";

function Movieui({ singlemovie }) {
  const navigate = useNavigate();
  return (
    <div className="grid-itemresult">
      <div className="movie-image">
        <img
          src={
            singlemovie.poster_path
              ? `https://image.tmdb.org/t/p/w500${singlemovie.poster_path}`
              : Placeholderimg
          }
          alt="movie_poster"
        />
      </div>
      <div className="movie-content-overlay">
        <h4 className="movie-title">{singlemovie.title}</h4>
        <div className="movie-sect">
          <p className="movie-genre">
            {singlemovie.release_date.split("-")[0]}
          </p>
          {/* <p className="movie-length">1hr 52m</p> */}
        </div>
        {/* <p
          className="movie-readmore"
          onClick={() => navigate(`/singlemovie/${singlemovie.id}`)}
        >
          Read more
        </p> */}
        <Link className="movie-readmore" to={`/singlemovie/${singlemovie.id}`}>
          Read more
        </Link>
      </div>
    </div>
  );
}

export default Movieui;
