import styled from "styled-components";

export const BackdropDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.75);
`;

export const ModalOverlayDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
`;

export const ModalDiv = styled.div`
  animation-name: slideDown;
  animation-duration: 300ms;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
  border-radius: 14px;
  background-color: transparent;
  position: fixed;
  top: ${props => props.top};
  width: ${props => props.width};
  z-index: 30;
  color: rgba(255, 255, 255, 0.87);
  text-align: center;
  max-width: inherit;
  max-height: 85%;
  /* top: 50%; */
  left: ${props => props.left};
  margin-left: -26.5%;
`;
