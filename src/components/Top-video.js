import { useState, useEffect } from "react";
import axios from "../sources/axios";
import classes from "./Top-video.module.css";
import styles from "../styles/pageTitle.module.css";
import "./button.css";
import Popup from "./popup";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_URL = "https://image.tmdb.org/t/p/original";
const opts = {
  width: "100%",
  height: "500px",
  playerVars: {
    autoplay: 1,
  },
};

function TopVideo({ fetchURL, pageTitle }) {
  //array of all movie trailers
  const [trailer, setTrailer] = useState([]);
  const [popup, setPopup] = useState();
  const [trailerURL, setTrailerURL] = useState("");

  //setTrailer brings result back of 1 random item in array list, new id of trailer
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setTrailer(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
      return request;
    }
    fetchData();
  }, [fetchURL]);

  console.log(trailer);

  function characterCount() {
    const summary = `${trailer.overview}`;
    if (summary.length >= 150) {
      return `${summary.substring(0, 150)}...`;
    } else {
      return summary;
    }
  }

  function handleMoreInfo() {
    if (popup) {
      setPopup(false);
    } else {
      setPopup(true);

      movieTrailer(
        trailer.name ||
          trailer.title ||
          trailer.original_title ||
          trailer.original_name ||
          ""
      )
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerURL(urlParams.get("v"));
          console.log(trailer.name);
        })
        .catch((error) => console.log(error));
    }
  }

  return (
    <header className={classes.container}>
      <div className={classes.imgFade}>
        <img
          key={trailer.id}
          className={classes.banner}
          src={`${base_URL}${trailer.backdrop_path}`}
        />
        <div className={classes.fade}></div>
      </div>

      <div className={classes.infoContainer}>
        <h1 className={styles.pageTitle}>{pageTitle}</h1>

        <div className={classes.header}>
          <h2 key={trailer.id} className={classes.title}>
            {!trailer.title ? trailer.name : trailer.original_title}
          </h2>
          <p key={trailer.overview} className={classes.overview}>
            {characterCount()}
          </p>
        </div>

        <div className={classes.buttons}>
          <button className={classes.button}>&#9654; Play</button>
          <button className={classes.button} id="info" onClick={handleMoreInfo}>
            &#9432; More Info
          </button>
        </div>
      </div>
      <div className={classes.overlay}></div>
      <div>
        {popup ? (
          <Popup
            trailer={<YouTube videoId={trailerURL} opts={opts} />}
            overview={trailer.overview}
            exitPopup={handleMoreInfo}
          />
        ) : null}
      </div>
    </header>
  );
}

export default TopVideo;
