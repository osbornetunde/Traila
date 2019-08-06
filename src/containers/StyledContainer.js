import styled from "styled-components";

const StyledContainer = styled.div`
  background: ${props => props.theme.primaryBg};
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  &:before {
    content: "TRAILA";
    position: fixed;
    top: 15vh;
    left: 8vw;
    font-size: 9vw;
    color: rgba(255, 255, 255, 0.2);
  }
`;

export default StyledContainer;
