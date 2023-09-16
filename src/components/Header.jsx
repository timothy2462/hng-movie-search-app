import React from "react";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import MovieDescription from "./MovieDescription";

const images = [
  "/bg-image-johnwick.jpg",
  "/bg-john-wick2.jpg",
  "/bg-john-wick4.jpg",
];
const Header = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    // styling for this component in the app CSS
    <div className="header">
      <div
        className="backgroundImage"
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      >
        <Navbar />
        <MovieDescription />
      </div>
    </div>
  );
};

export default Header;
