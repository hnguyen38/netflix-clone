import TopVideo from "../components/Top-video";
import requests from "../sources/Requests";
import Rows from "../components/Rows";
import styles from "../styles/rowsDiv.module.css";

function TVshowsPage() {
  return (
    <div>
      <TopVideo fetchURL={requests.fetchTrending} pageTitle="TV Shows" />
      <div className={styles.rowsDiv}>
        <Rows title="Popular on Netflix" fetchURL={requests.fetchTrending} />
        <Rows title="Top Rated" fetchURL={requests.fetchTopRated} />
        <Rows title="Documentaries" fetchURL={requests.fetchDocumantaries} />
      </div>
    </div>
  );
}

export default TVshowsPage;
