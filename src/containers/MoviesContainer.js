import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import Movies from "../components/Movies";
import { getMovies } from "../actions/movieActions";
import { GET_MOVIES } from "../constants/label";

const MovieContainer = props => <Movies {...props} />;

const mapStateToProps = state => ({
  movies: _.shuffle(_.values(state.movies)),
  loading: state.isLoading[GET_MOVIES]
});

export default connect(
  mapStateToProps,
  { getMovies }
)(MovieContainer);
