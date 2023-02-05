import { useEffect } from 'react';
import { HiX } from "react-icons/hi";
import { ModalBackdrop, ModalBtn, ModalContent } from './Modal.styled';

const Modal = ({ children, onClose, isOpen }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
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
  return (
    <ModalBackdrop className={isOpen ? "modal active" : "modal"} onClick={handleBackdropClick}>
      <ModalContent>
        <ModalBtn type="ModalBtn" onClick={onClose}><HiX color='black' width={20}/></ModalBtn>
        {children}
      </ModalContent>
    </ModalBackdrop>
  );
};

export default Modal;
