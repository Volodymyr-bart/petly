import { useEffect } from 'react';
import { createPortal } from "react-dom";
import { HiX } from "react-icons/hi";
import { ModalBackdrop, ModalBtn, ModalContent } from './Modal.styled';

const modalRoot = document.getElementById('modal-univers');

export const Modal = ({ children, onClose, isOpen }) => {
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <ModalBackdrop  className={isOpen ? "modal active" : "modal"} onClick={handleBackdropClick}>
      <ModalContent>
        <ModalBtn type="ModalBtn" onClick={onClose}><HiX color='black' width={20}/></ModalBtn>
        {children}
      </ModalContent>
    </ModalBackdrop>,
    modalRoot);
};
