import { useState, useEffect } from "react";
import axios from "../sources/axios";
import requests from "../sources/Requests";
import classes from "./Top-video.module.css";

const base_URL = "https://image.tmdb.org/t/p/original";

function TopVideo() {
  //array of all movie trailers
  const [trailer, setTrailer] = useState([]);

  //setTrailer brings result back of 1 random item in array list, new id of trailer
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);
      setTrailer(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );

      return request;
    }
    fetchData();
  }, []);

  //some banner titles undefined, async problem?? and some overviews go out of box go BACK TO THIS FUNCTION!!!
  function titles() {
    if (`${trailer.title}` !== "") {
      return `${trailer.title}`;
    } else if (`${trailer.name}` !== "") {
      return `${trailer.name}`;
    } else if (`${trailer.original_title}` !== "") {
      return `${trailer.original_title}`;
    }
  }

  console.log(trailer);
  return (
    <div>
      <img
        key={trailer.id}
        className={classes.banner}
        src={`${base_URL}${trailer.backdrop_path}`}
      />

      <div className={classes.infoContainer}>
        <div className={classes.header}>
          <h2 key={trailer.id} className={classes.title}>
            {titles()}
          </h2>
          <p key={trailer.overview} className={classes.overview}>
            {trailer.overview}
          </p>
        </div>

        <div className={classes.buttons}>
          <button className={classes.button}>&#9654; Play</button>
          <button className={classes.button}>&#9432; More Info</button>
        </div>
      </div>
    </div>
  );
}

export default TopVideo;
