import ReactDOM from "react-dom";

import { BackdropDiv, ModalDiv, ModalOverlayDiv } from "./ModalStyles";

const Backdrop = ({Toggle}) => {
  return <BackdropDiv onClick={Toggle}/>;
};

const ModalOverlay = ({ children, top, width, left, height }) => {
  return (
    <ModalOverlayDiv>
      <ModalDiv top={top} width={width} left={left} height={height}>
        <>{children}</>
      </ModalDiv>
    </ModalOverlayDiv>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = ({ children, top, width, left, height, Toggle }) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop Toggle={Toggle} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay top={top} width={width} left={left} height={height}>{children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
