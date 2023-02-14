import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import { Overlay, ModalWindow, StyledModalBurger } from "./Modal.styled";


const modalRoot = document.getElementById('modal-root');

export const Modal = ({ children, onClose }) => {

  const [showModal, setShowModal] = useState(true);

  useEffect(() => {

    document.addEventListener('keydown', closeModal);
    document.body.style.overflow = "hidden";
        return () => {
          document.removeEventListener('keydown', closeModal);
          document.body.style.overflow = ""; 
        }
   
  })

  const closeModal = ({ target, currentTarget, code }) => {
    if (target !== currentTarget || code === "Escape") {
      onClose();
    }
  }

  return createPortal(
    <Overlay onClick={closeModal} >
      <ModalWindow>{children}</ModalWindow>
      <StyledModalBurger
        aria-label="menu"
        open={showModal}
        onClick={() => {
          setShowModal(current => !current);
          setShowModal(!showModal);
        }}
      >
        <div></div>
        <div></div>
        <div></div>
      </StyledModalBurger>
    </Overlay>,
    modalRoot);
}
