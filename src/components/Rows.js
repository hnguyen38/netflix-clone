import classes from "./Rows.module.css";
import axios from "../sources/axios";
import { useState, useEffect, useRef } from "react";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_URL = "https://image.tmdb.org/t/p/original";
const opts = {
  width: "100%",
  height: "600",

  playerVars: {
    autoplay: 1,
  },
};

function Rows({ title, fetchURL, topRow, key }) {
  const [movies, setMovies] = useState([]);
  const [trailerURL, setTrailerURL] = useState("");
  const [leftButton, setButton] = useState(false);

  const moviesRef = useRef(0);

  //if any variable is being passed from outside block (fetchURL) you HAVE TO put it as a dependency bc function is now dependent on fetchURL
  //URL may change so useEffect will run again DEPENDING on fetchURL (?)
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchURL]);

  const handleImgClick = (movie) => {
    if (trailerURL) {
      setTrailerURL(false);
    } else {
      movieTrailer(
        movie.name ||
          movie.title ||
          movie.original_title ||
          movie.original_name ||
          ""
      )
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerURL(urlParams.get("v"));
          console.log(movie.name);
        })
        .catch((error) => console.log(error));
    }
  };

  const scroll = (scrollOffset) => {
    moviesRef.current.scrollLeft += scrollOffset;
  };

  return (
    <div className={classes.container}>
      <h3 className={classes.title}>{title}</h3>
      <div ref={moviesRef} className={classes.moviesRow}>
        {movies.map((movie) => (
          <img
            className={classes.image}
            key={movie.id}
            src={`${base_URL}${
              topRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            onClick={() => {
              handleImgClick(movie);
            }}
          />
        ))}
      </div>
      <div>
        {trailerURL ? <YouTube videoId={trailerURL} opts={opts} /> : null}
      </div>
      <div className={classes.button}>
        <button
          className={leftButton ? `${classes.left}` : `${classes.hide}`}
          onClick={() => scroll(-900)}
        >{`<`}</button>

        <button
          className={classes.right}
          onClick={() => {
            scroll(900);
            setButton(true);
          }}
        >{`>`}</button>
      </div>
    </div>
  );
}

export default Rows;
