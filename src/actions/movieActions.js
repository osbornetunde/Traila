import { createAction } from "redux-actions";
import { normalize, schema } from "normalizr";
import { apiPayloadCreator } from "../utils/appUtils";
import {
  API,
  SET_MOVIES,
  SELECT_MOVIE,
  RATE_MOVIE
} from "../constants/actionTypes";
import { GET_MOVIES } from "../constants/label";

const getMoviesAC = createAction(API, apiPayloadCreator);

export const getMovies = () =>
  getMoviesAC({ url: "/1ee5vx", onSuccess: setMovies, label: GET_MOVIES });

function setMovies(movies) {
  const movieSchema = new schema.Entity("movies");
  const moviesListSchema = new schema.Array(movieSchema);
  const normalizedData = normalize(movies, moviesListSchema);

  return {
    type: SET_MOVIES,
    payload: normalizedData.entities.movies
  };
}

export const selectMovie = createAction(SELECT_MOVIE);
// export const selectMovie = id => ({
//   type: SELECT_MOVIE,
//   payload: id
// });

export const rateMovie = createAction(RATE_MOVIE, (rating, movieId) => ({
  rating,
  movieId
}));
