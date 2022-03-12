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
        <Rows
          title="Netflix Originals"
          fetchURL={requests.fetchNetflixOriginals}
        />
        <Rows title="Top Rated" fetchURL={requests.fetchTopRated} />
      </div>
    </div>
  );
}

export default Homepage;
