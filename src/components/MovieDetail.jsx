import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "./Sidebar";
import styles from "./moviedetails.css";

const MovieDetail = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [movieVideos, setMovieVideos] = useState([]);
  const [directors, setDirectors] = useState([]);
  const [writers, setWriters] = useState([]);
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const apiKey = "99e8e876f40ab40fb0a9ce609913777f";
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
        );
        if (response.ok) {
          const data = await response.json();
          setMovieDetails(data);
        } else {
          console.error("Failed to fetch movie details");
        }
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    const fetchMovieVideos = async () => {
      try {
        const apiKey = "99e8e876f40ab40fb0a9ce609913777f";
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}&language=en-US`
        );
        if (response.ok) {
          const data = await response.json();
          setMovieVideos(data.results);
        } else {
          console.error("Failed to fetch movie videos");
        }
      } catch (error) {
        console.error("Error fetching movie videos:", error);
      }
    };

    const fetchMovieCredits = async () => {
      try {
        const apiKey = "99e8e876f40ab40fb0a9ce609913777f";
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}&language=en-US`
        );
        if (response.ok) {
          const data = await response.json();
          setDirectors(data.crew.filter((person) => person.job === "Director"));
          setWriters(
            data.crew.filter((person) => person.department === "Writing")
          );
          setStars(data.cast.slice(0, 5)); // Get the top 5 cast members
        } else {
          console.error("Failed to fetch movie credits");
        }
      } catch (error) {
        console.error("Error fetching movie credits:", error);
      }
    };

    if (id) {
      fetchMovieVideos();
      fetchMovieDetails();
      fetchMovieCredits();
    }
  }, [id]);
  

  return (
    <section className="movie-details-page">
      <Sidebar />
      <main className="main-page">
        {movieVideos.length > 0 && (
          <div className="thriller">
            <iframe
              // width="620"
              height="314"
              src={`https://www.youtube.com/embed/${movieVideos[0].key}?autoplay=1&rel=0`}
              title="Movie Trailer"
              allowFullScreen
              className="movie-triller"
            ></iframe>
          </div>
        )}

        {movieDetails && (
          <div className="movie-details-container">
            <div className="general-overview">
              <div className="about-movie-container">
                <div className="about-movie">
                  <h3 data-testid="movie-title">{movieDetails.title}</h3>

                  <p data-testid="movie-release-date"> {movieDetails.release_date}</p>
                 
                  <p data-testid="movie-runtime"> {movieDetails.runtime}Mins</p>
                </div>
                <div className="action">
                  <p>Action</p>
                  <p>Drama</p>
                </div>
              </div>
              <div className="movie-overview">
                <p data-testid="movie-overview"> {movieDetails.overview}</p>
              </div>

              {directors.length > 0 && (
                <div className="directors">
                  <p>Directors:</p>
                  {directors.map((director) => (
                    <p className="character" key={director.id}>
                      {director.name}
                    </p>
                  ))}
                </div>
              )}

              {writers.length > 0 && (
                <div className="writters">
                  <p>Writers:</p>
                  {writers.map((writer) => (
                    <p className="character" key={writer.id}>
                      {writer.name}
                    </p>
                  ))}
                </div>
              )}

              <div className="top-rated">
                <p>Top rated movie </p>
              </div>
            </div>
            <div className="movie-poster">
              <img
                src={`https://image.tmdb.org/t/p/w342/${movieDetails.poster_path}`}
                alt={movieDetails.title}
                width={180}
                // height={342}
              />
            </div>
          </div>
        )}
      </main>
    </section>
  );
};

export default MovieDetail;
