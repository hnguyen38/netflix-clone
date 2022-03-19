import { Link } from "react-router-dom";
import classes from "./navigationbar.module.css";
import logo from "../images/netflixlogo";
import { useState } from "react";
import avi from "../images/avatar.png";

function NavigationBar() {
  const [navbar, setNavbar] = useState(false);

  //stack overflow code
  function changeColor() {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }

  window.addEventListener("scroll", changeColor);

  return (
    <div className={navbar ? `${classes.active}` : `${classes.container}`}>
      <div>
        <Link to="/">
          <span>
            <img src={logo} alt="Netflix" className={classes.logo} />
          </span>
        </Link>
        <ul className={classes.header}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/tvshows">TV Shows</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <Link to="/new-and-popular">New & Popular</Link>
          </li>
          <li>
            <Link to="/mylist">My List</Link>
          </li>
        </ul>
      </div>
      <div className={classes.right}>
        <span>
          <img className={classes.avi} src={avi} />{" "}
          <p className={classes.arrow}>&#9660;</p>
        </span>
      </div>
    </div>
  );
}

export default NavigationBar;
