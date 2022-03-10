//import TopVideo from "../components/Top-video";
import classes from "./home.module.css";
import Rows from "../components/Rows";
import requests from "../sources/Requests";

function Homepage() {
  return (
    <div>
      <h1 className={classes.title}>Home(no title)</h1>
      <Rows title="Trending Now" fetchURL={requests.fetchTrending} />
      <Rows title="Netflix Originals" fetchURL={requests.fetchNetflixOriginals} />
      <Rows title="Top Rated" fetchURL={requests.fetchTopRated} />
    </div>
  );
}

export default Homepage;
