import React from "react";
import styles from "./footer.css";
import { BsFacebook, BsYoutube } from "react-icons/bs";
import { ImTwitter } from "react-icons/im";
import { GrInstagram } from "react-icons/gr";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="socials">
          <BsFacebook size={20} />
          <GrInstagram size={20} />
          <ImTwitter size={20} />
          <BsYoutube size={20} />
        </div>
        <div className="conditions">
          <p>Condition of Use</p>
          <p>Privacy & Policy</p>
          <p>Press Room</p>
        </div>
        <div className="year">
          <p>&copy;2023 MovieBox by Timothy Akobundu</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
