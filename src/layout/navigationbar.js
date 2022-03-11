import { Link } from "react-router-dom";
import classes from "./navigationbar.module.css";
import logo from "../images/netflixlogo";

function NavigationBar() {
  return (
    <div className={classes.container}>
      <div>
        <span>
          <img src={logo} alt="Netflix" className={classes.logo} />
        </span>
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
        <span>Search bar</span>
        <span>User Account</span>
      </div>
    </div>
  );
}

export default NavigationBar;
