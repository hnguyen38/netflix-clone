import classes from "./Rows.module.css";
import axios from "../sources/axios";
import { useState, useEffect } from "react";

const base_URL = "https://image.tmdb.org/t/p/original";

function Rows({ title, fetchURL }) {
  const [movies, setMovies] = useState([]);

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

  return (
    <div className={classes.container}>
      <h3 className={classes.title}>{title}</h3>
      <div className={classes.moviesRow}>
        {movies.map((movie) => (
          <img
            className={classes.image}
            key={movie.id}
            src={`${base_URL}${movie.poster_path}`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Rows;
