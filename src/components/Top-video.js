import { useState, useEffect } from "react";
import axios from "../sources/axios";
import requests from "../sources/Requests";
import classes from "./Top-video.module.css";
import "./button.css";

const base_URL = "https://image.tmdb.org/t/p/original";

function TopVideo({ fetchURL }) {
  //array of all movie trailers
  const [trailer, setTrailer] = useState([]);

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
  return (
    <div>
      <div className={classes.imgFade}>
        <img
          key={trailer.id}
          className={classes.banner}
          src={`${base_URL}${trailer.backdrop_path}`}
        />
        <div className={classes.fade}></div>
      </div>

      <div className={classes.infoContainer}>
        <div className={classes.header}>
          <h2 key={trailer.id} className={classes.title}>
            {!trailer.title ? trailer.name : trailer.original_title}
          </h2>
          <p key={trailer.overview} className={classes.overview}>
            {trailer.overview}
          </p>
        </div>

        <div className={classes.buttons}>
          <button className={classes.button}>&#9654; Play</button>
          <button className={classes.button} id="info">
            &#9432; More Info
          </button>
        </div>
      </div>
    </div>
  );
}

export default TopVideo;
