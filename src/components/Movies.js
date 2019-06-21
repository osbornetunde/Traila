import React from "react";
import FontAwesomeIcon from "./FontAwesomeIcon";
import StyledHeader from "./StyledHeader";
import StyledHeaderTitle from "./StyledHeaderTitle";
import StyledHorizontalScroll from "./StyledHorizontalScroll";
import Movie from "./Movie";
import StyledFooter from "./StyledFooter";
import StyledLargeBtn from "./StyledLargeBtn";
import HelpMenuContainer from "../containers/HelpMenuContainer";
import StyledLoader from "../components/StyledLoader";
import StyledMovieLink from "./StyledMovieLink";
// import { getMovies } from "../actions/movieActions";

class Movies extends React.Component {
  // console.log(props);
  // useEffect(() => {
  //   props.getMovies();
  // }, [props]);
  state = {};
  static defaultProps = {
    movies: [],
    loading: true
  };

  componentDidMount() {
    if (this.props.movies.length === 0) {
      this.props.getMovies();
    }
  }

  render() {
    // console.log("env path: ", process.env.PUBLIC_URL);
    return (
      <>
        <StyledHeader>
          <HelpMenuContainer />
          <StyledHeaderTitle>The Movie Recommender</StyledHeaderTitle>
          <FontAwesomeIcon icon="search" />
        </StyledHeader>
        <StyledHorizontalScroll>
          {this.props.loading ? (
            <StyledLoader />
          ) : (
            this.props.movies.map(movie => (
              <StyledMovieLink to={`/movies/${movie.id}`} key={movie.id}>
                <Movie
                  poster={movie.poster}
                  duration={movie.duration}
                  name={movie.name}
                  year={movie.year}
                  trailer={movie.trailer}
                />
              </StyledMovieLink>
            ))
          )}
        </StyledHorizontalScroll>
        <StyledFooter>
          <StyledLargeBtn>Get Recommended Movies</StyledLargeBtn>
        </StyledFooter>
      </>
    );
  }
}
export default Movies;
