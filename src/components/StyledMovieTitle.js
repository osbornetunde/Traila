import styled from "styled-components";

const StyledMovieTitle = styled.div`
  color: ${props => (props.isLarge ? "rgba(0, 0, 0, 0.5)" : "#525661")};
  margin-bottom: 4px;
  font-size: ${props => (props.isLarge ? "2.2rem" : "1rem")};
  width: ${props => (props.isLarge ? "auto" : props.theme.posterWidth)};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: ${props => (props.isLarge ? "wrap" : "nowrap")};
`;

export default StyledMovieTitle;
