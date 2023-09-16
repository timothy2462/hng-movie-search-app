import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./moviecard.css";

const MovieCard = ({ movie }) => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div>
      <div className="movieCard-container" data-testid="movie-card">
        {/* Wrap the card content with a Link component to the MovieDetail page */}
        <Link to={`/movie/${movie.id}`} className="link">
          <div className="movie-card">
            <img
              src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
              alt={movie.title}
              width={170}
              height={230}
              className="movie-img"
              data-testid="movie-poster"
            />
            {liked ? (
              <FaHeart className={`love-icon liked`} onClick={toggleLike} />
            ) : (
              <FaHeart className={`love-icon`} onClick={toggleLike} />
            )}
            <p className="release"data-testid="movie-release-date">Release Date: {movie.release_date}</p>
            <h3 data-testid="movie-title">{movie.title}</h3>
            <div className="rating-movieCard">
              <div className="imdb-movieCard">
                <img src={"/images/imdb.png"} width={30} height={15} />
                <p>86.0 / 100</p>
              </div>
              <div className="fruits-movieCard">
                <img src={"/images/fruit.png"} width={14} height={14} />
                <p>97%</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
