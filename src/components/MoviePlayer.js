import React from "react";
import ReactDOM from "react-dom";
import styled, { keyframes } from "styled-components";

const modalRoot = document.getElementById("modal-root");

const show = keyframes`
to {
  transform: translateX(0);
  opacity: 1;
}
`;

const StyledModalBackdrop = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: grid;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 100;
  &,
  & > * {
    transform: translateX(-150px);
    /* opacity: 1; */
    animation: ${show} 700ms forwards;
  }
`;

const StyleModal = styled.div`
  padding: 20;
  background: #fff;
  border-radius: 2px;
  display: inline-block;
  min-height: 300px;
  margin: 1rem;
  position: relative;
  min-width: 300px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  justify-self: center;
`;

const MoviePlayer = props =>
  ReactDOM.createPortal(
    <StyledModalBackdrop onClick={props.onClose}>
      <StyleModal>{props.children}</StyleModal>
    </StyledModalBackdrop>,
    modalRoot
  );

export default MoviePlayer;
