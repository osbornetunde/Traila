import styled from "styled-components";
//#525661
const StyledMovieTitle = styled.div`
  color: ${props => (props.isLarge ? "rgba(0, 0, 0, 0.5)" : "#4C4E52")};
  margin-bottom: 4px;
  font-size: ${props => (props.isLarge ? "2.2rem" : "1rem")};
  width: ${props => (props.isLarge ? "auto" : props.theme.posterWidth)};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: ${props => (props.isLarge ? "wrap" : "nowrap")};
`;

export default StyledMovieTitle;
