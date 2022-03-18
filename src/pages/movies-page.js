import styles from "../styles/rowsDiv.module.css";
import requests from "../sources/Requests";
import TopVideo from "../components/Top-video";
import Rows from "../components/Rows";

function MoviesPage() {
  return (
    <div>
      <TopVideo fetchURL={requests.fetchTopRated} pageTitle="Movies" />
      <div className={styles.rowsDiv}>
        <Rows title="Action Movies" fetchURL={requests.fetchActionMovies} />
        <Rows title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
        <Rows title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
      </div>
    </div>
  );
}

export default MoviesPage;
