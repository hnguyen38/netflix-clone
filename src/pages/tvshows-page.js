import TopVideo from "../components/Top-video";
import classes from "./tvshows.module.css";
import requests from "../sources/Requests";
import Rows from "../components/Rows";

function TVshowsPage() {
  return (
    <div>
      <h1 className={classes.title}>TV Shows</h1>
      <TopVideo fetchURL={requests.fetchTVPopular} />
      <Rows title="Popular on Netflix" fetchURL={requests.fetchTVPopular} />
      <Rows title="Top Rated" fetchURL={requests.fetchTopRated} />
      <Rows title="Romance" fetchURL={requests.fetchTVRomance} />
    </div>
  );
}

export default TVshowsPage;
