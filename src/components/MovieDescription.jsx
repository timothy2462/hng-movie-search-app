import React from "react";
import styles from "./moviedescription.css";
import { AiFillPlayCircle } from "react-icons/ai";

const MovieDescription = () => {
  return (
    <div className="movie-description">
      <div className="movie-title">
        <h1>John Wick 3 : Parabellum</h1>
      </div>

      <div className="rating">
        <div className="imdb">
          <img src={"/images/imdb.png"} width={40} height={15} />
          <p>86.0 / 100</p>
        </div>
        <div className="fruits">
          <img src={"/images/fruit.png"} width={17} height={17} />
          <p>97%</p>
        </div>
      </div>

      <div className="john-wick">
        <p>
          John Wick is on the run after killing a member of the international
          assassins' guild, and with a $14 million price tag on his head, he is
          the target of hit men and women everywhere.
        </p>
      </div>

      <div className="watch-btn">
        <AiFillPlayCircle className="play-icon" />
        <button>IN CINEMA NOW</button>
      </div>
    </div>
  );
};

export default MovieDescription;
