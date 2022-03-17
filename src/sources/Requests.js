const API_KEY = "223ad9865a537191188757903fe9284e";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumantaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchUpcomingMovies: `/movie/upcoming?api_key=${API_KEY}&language=en-US`,
  fetchUpcomingAction: `/movie/upcoming?api_key=${API_KEY}&with_genres=28`,
  fetchUpcomingComedy: `/movie/upcoming?api_key=${API_KEY}&with_genres=35`,

  // fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  // fetchTVPopular: `/tv/popular?api_key=${API_KEY}&with_networks=213`,
  // fetchTVTopRated: `/tv/top_rated?api_key=${API_KEY}&with_networks=213`,
};

// work: fetchActionMovies, fetchTrending, fetchTopRated, fetchDocumantaries, fetchComedyMovies, fetchRomanceMovies, fetchUpcomingComedy, fetchUpcomingAction, fetchUpcomingMovies,

//dont work: fetchNetflixOriginals, fetchTVPopular, fetchTVTopRated

export default requests;
