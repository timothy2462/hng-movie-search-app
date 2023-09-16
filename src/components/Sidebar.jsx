import React from "react";
import styles from "./sidebar.css";
import { AiOutlineHome } from "react-icons/ai";
import { BiCameraMovie } from "react-icons/bi";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { BiLogIn } from "react-icons/bi";
import { ImCalendar } from "react-icons/im";

const Sidebar = () => {
  return (
    <aside>
      <div className="movies-box">
        <img src={"/images/tv-icon.png"} width={20} />
        <h3>Movie box</h3>
      </div>
      <div className="home">
        <AiOutlineHome className="m-icon" />
        <p>Home</p>
      </div>
      <div className="movies">
        <BiCameraMovie className="m-icon" />
        <p>Movies</p>
      </div>
      <div className="tv-series">
        <PiTelevisionSimpleBold className="m-icon" />
        <p>TV Series</p>
      </div>
      <div className="upcoming">
        <ImCalendar className="m-icon" size={13} />
        <p>Upcoming</p>
      </div>
      <div className="play-movies">
        <div className="play-movies-content">
          <p className="thick-text">play movie quizes and earn free tickets </p>
          <p className="light-text">50k people are playing now</p>
          <div className="start-playing">
            <p>Start playing</p>
          </div>
        </div>
      </div>
      <div className="logout">
        <BiLogIn className="m-icon" />
        <p>Log Out</p>
      </div>
    </aside>
  );
};

export default Sidebar;
