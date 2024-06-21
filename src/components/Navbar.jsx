import { Link } from "react-router-dom";
import DecorationImage from "../assets/img/decor.webp";

import "./stylesheets/Navbar.css";

export default function Navbar() {
  const resetScroll = () => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  };

  return (
    <div className="flex justify-between flex-row navbar-container">
      <div className="flex flex-col justify-between">
        <span className="name">vgfang</span>
        <nav className="flex flex-wrap navbar-links">
          <Link src="/" onClick={resetScroll} to="/">
            Home
          </Link>

          {/* <Link onClick={resetScroll} to="/projects">
          Projects
        </Link> */}

          <a target="_blank" href="https://github.com/vgfang">
            Github
          </a>

          <Link to="/contact" onClick={resetScroll}>
            Contact
          </Link>
        </nav>
      </div>
      <img
        className="navbar-img"
        src={DecorationImage}
        alt="image for decoration"
      ></img>
    </div>
  );
}
