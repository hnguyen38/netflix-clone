import TopVideo from "../components/Top-video";
import requests from "../sources/Requests";
import Rows from "../components/Rows";

function TVshowsPage() {
  return (
    <div>
      <TopVideo fetchURL={requests.fetchTrending} pageTitle="TV Shows" />
      <Rows title="Popular on Netflix" fetchURL={requests.fetchTrending} />
      <Rows title="Top Rated" fetchURL={requests.fetchTopRated} />
      <Rows title="Documentaries" fetchURL={requests.fetchDocumantaries} />
    </div>
  );
}

export default TVshowsPage;
