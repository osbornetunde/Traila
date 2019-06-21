import { handleActions } from "redux-actions";
import { SET_MOVIES, RATE_MOVIE } from "../constants/actionTypes";
import produce from "immer";

export default handleActions(
  {
    [SET_MOVIES]: (state, action) => action.payload,
    [RATE_MOVIE]: produce((state, action) => {
      const { movieId, rating } = action.payload;
      state[movieId].rating = rating;
    })
  },
  {}
);
