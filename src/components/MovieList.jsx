import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import styles from "./moviecard.css";
import { BsChevronRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import Header from "./Header";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const apiKey = "99e8e876f40ab40fb0a9ce609913777f";
    const apiUrl = "https://api.themoviedb.org/3/movie/top_rated";

    const params = new URLSearchParams({
      api_key: apiKey,
      language: "en-US",
      page: 1,
    });

    const fetchMovies = async () => {
      try {
        const response = await fetch(`${apiUrl}?${params}`);
        const data = await response.json();

        if (data.results.length > 0) {
          const movies = data.results.slice(0, 15);
          setMovies(movies);
        }
      } catch (error) {
        console.error("Error fetching popular movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <Header />
      <div className="movieList-container">
        <div className="featured-movies">
          <h2>Featured Movies</h2>
          <div className="see-more">
            <p>See more </p>
            <BsChevronRight size={13} />
          </div>
        </div>
        <div className="movie-list">
          {movies.map((movie) => (
            // Wrap each MovieCard with a Link component
            <Link to={`/movie/${movie.id}`} key={movie.id} className="link">
              <MovieCard movie={movie} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
