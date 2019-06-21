import React, { Fragment } from "react";
import styled, { keyframes } from "styled-components";
import ReactStars from "react-stars";
import { Link } from "react-router-dom";
import StyledHeader from "./StyledHeader";
import FontAwesomeIcon from "./FontAwesomeIcon";
import StyledHeaderLink from "./StyledHeaderLink";
import { devices } from "../utils/styledUtils";
import StyledPoster from "./StyledPoster";
import StyledMovieTitle from "./StyledMovieTitle";
import StyledMovieLengthYear from "./StyledMovieLengthYear";
import MoviePlayer from "./MoviePlayer";
import StyledLoader from "../components/StyledLoader";

const show = keyframes`
to {
  transform: translateY(0);
  opacity: 1;
  animation-delay: 2s;
  animation-fill-mode: forwards;
}
`;

const appear = keyframes`
to {
  transform: translateX(0);
  opacity: 1;
  animation-fill-mode: ease-out;
}
`;

const StyledMovieDetails = styled.div`
  display: flex;
  flex-direction: column;
  ${devices.md`
    flex-direction: row;
  `}
`;

const StyleMovieInfo = styled.div`
  padding: 2rem 0 1rem 0;
  &,
  & > * {
    transform: translateY(-150px);
    opacity: 0;
    animation: ${show} 700ms forwards;
  }

  ${devices.md`
    margin-left: 13rem;
  `}
`;

const StyledMovieDesc = styled.div`
  margin-top: 30px;
  font-size: 0.8rem;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.5);
`;

const StyledSmallBtn = styled(Link)`
  background: #eb6259;
  border: none;
  border-radius: 20px;
  color: #fff;
  font-size: 12px;
  line-height: 1.5;
  display: inline-block;
  padding: 8px 17px;
  margin: 20px 0 15px 0;
  text-transform: uppercase;
  z-index: 10;
  outline: none !important;
  cursor: pointer;
  text-decoration: none;
  &:active {
    transform: translateY(4px);
  }
`;

const StyledFrame = styled.iframe`
  min-width: 400px;
  min-height: 300px;

  &,
  & > * {
    transform: translateX(150px);
    opacity: 0;
    animation: ${appear} 1000ms backwards;
    animation-delay: 2s;
  }

  ${devices.sm`
    min-width: 500px;
    min-height: 300px;
    `}

${devices.md`
    min-width: 700px;
    min-height: 500px;
  `}

  ${devices.lg`
      min-width: 971px;
      min-height: 546px;
    `}

  
`;

class MovieDetails extends React.Component {
  static defaultProps = {
    selectedMovie: {
      name: "",
      poster: "",
      year: "",
      duration: "",
      trailer: "",
      details: "",
      id: "0"
    }
  };

  state = { modal: false, videoId: "" };

  handleCloseModal = () => {
    this.setState({ modal: false });
  };

  _ratingChanged = newRating => {
    // console.log(newRating);
    const movieId = +this.props.match.params.id;
    this.props.rateMovie(newRating, movieId);
    // return this.props.rating;
  };

  displayVideo = value => {
    this.setState({ modal: true });
    const videoSrc = value;
    const endPosition = videoSrc.lastIndexOf("/");
    return this.setState({ videoId: videoSrc.slice(endPosition) });
  };

  componentDidMount() {
    const movieId = +this.props.match.params.id;
    this.props.selectMovie(movieId);
  }

  render() {
    const {
      poster,
      name,
      duration,
      details,
      year,
      trailer,
      rating
    } = this.props.selectedMovie;
    return (
      <Fragment>
        <StyledHeader>
          <StyledHeaderLink to="/">
            <FontAwesomeIcon icon="chevron-left" text="Go back" />
          </StyledHeaderLink>
        </StyledHeader>
        <StyledMovieDetails>
          <StyledPoster src={poster} alt={`Movie: ${name}`} isExpanded />
          <StyleMovieInfo>
            <StyledMovieTitle isLarge> {name} </StyledMovieTitle>
            <StyledMovieLengthYear>{`${duration} ${year}`}</StyledMovieLengthYear>
            <StyledMovieDesc>{details}</StyledMovieDesc>
            <StyledSmallBtn onClick={() => this.displayVideo(trailer)}>
              Watch Trailer
            </StyledSmallBtn>
            <ReactStars
              count={5}
              size={24}
              color2={"#f7aec2"}
              value={rating}
              onChange={this._ratingChanged}
            />
          </StyleMovieInfo>
        </StyledMovieDetails>
        {this.state.modal ? (
          <MoviePlayer onClose={this.handleCloseModal}>
            {!trailer ? (
              <StyledLoader />
            ) : (
              <StyledFrame
                // width="971"
                // height="546"
                title="videoplayer"
                src={`https://youtube.com/embed${this.state.videoId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </MoviePlayer>
        ) : null}
      </Fragment>
    );
  }
}

export default MovieDetails;
