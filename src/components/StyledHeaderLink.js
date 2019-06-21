import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledHeaderLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  margin-left: auto;

  &:hover {
    color: #fff;
  }
`;

export default StyledHeaderLink;
