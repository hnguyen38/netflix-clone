import classes from "./movies.module.css";
import requests from "../sources/Requests";
import TopVideo from "../components/Top-video";
import Rows from "../components/Rows";

function MoviesPage() {
  return (
    <div>
      <h1 className={classes.title}>Movies</h1>
      <TopVideo fetchURL={requests.fetchTopRated} />
      <Rows title="Action Movies" fetchURL={requests.fetchActionMovies} />
      <Rows title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
      <Rows title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
    </div>
  );
}

export default MoviesPage;
