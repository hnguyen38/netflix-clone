import Rows from "../components/Rows";
import requests from "../sources/Requests";
import TopVideo from "../components/Top-video";

function Homepage() {
  return (
    <div>
      <div>
        <TopVideo fetchURL={requests.fetchTrending} />
      </div>
      <div>
        <Rows title="Trending Now" fetchURL={requests.fetchTrending} />
        <Rows title="Top Rated" fetchURL={requests.fetchTopRated} />
        <Rows title="Action" fetchURL={requests.fetchActionMovies} />
        <Rows title="Documentaries" fetchURL={requests.fetchDocumantaries} />
        <Rows title="Comedy" fetchURL={requests.fetchComedyMovies} />
        <Rows title="Romance" fetchURL={requests.fetchRomanceMovies} />
      </div>
    </div>
  );
}

export default Homepage;
