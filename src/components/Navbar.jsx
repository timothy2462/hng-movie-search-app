import React from "react";
import styles from "./navbar.css";

import { FiSearch } from "react-icons/fi";
import { HiMenuAlt4 } from "react-icons/hi";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="movie-box">
        <img src={"/images/tv-icon.png"} width={24} height={24} alt="tv icon" />
        <h3>Movie Box</h3>
      </div>

      <div className="search-bar">
        <input
          className="search-input"
          type="text"
          placeholder="What do you want to watch?"
        />
        <FiSearch className="search-icon" />
      </div>

      <div className="sign-in">
        <p>Sign in</p>
        <HiMenuAlt4 className="menu-icon" />
      </div>
    </div>
  );
};

export default Navbar;
