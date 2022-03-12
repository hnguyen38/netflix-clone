import classes from "./nap.module.css";
import requests from "../sources/Requests";
import TopVideo from "../components/Top-video";
import Rows from "../components/Rows";

function NapPage() {
  return (
    <div>
      <Rows title="New on Netflix" fetchURL={requests.fetchNetflixOriginals} />
      <Rows title="Top Rated" fetchURL={requests.fetchTVTopRated} />
      <Rows title="Worth the Wait" fetchURL={requests.fetchUpcomingMovies} />
      <Rows title="Coming This Week" fetchURL={requests.fetchUpcomingAction} />
      <Rows title="Coming Next Week" fetchURL={requests.fetchUpcomingComedy} />
    </div>
  );
}

export default NapPage;
