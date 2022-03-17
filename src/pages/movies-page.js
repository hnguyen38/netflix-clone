import classes from "./movies.module.css";
import style from "./rowBody.module.css";
import requests from "../sources/Requests";
import TopVideo from "../components/Top-video";
import Rows from "../components/Rows";

function MoviesPage() {
  return (
    <div>
      <TopVideo fetchURL={requests.fetchTopRated} pageTitle="Movies" />
      <div>
        <Rows
          title="Action Movies"
          fetchURL={requests.fetchActionMovies}
          topRow
        />
        <Rows title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
        <Rows title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
      </div>
    </div>
  );
}

export default MoviesPage;
