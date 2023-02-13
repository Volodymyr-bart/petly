import styled from 'styled-components';

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;

  opacity: 0;
  visibility: hidden;
  transition: all 0.5s ease 0s;
  overflow-y: auto;  
  &.active {
    opacity: 1;
    visibility: visible;
    pointer-events: all;
  };
`;

export const ModalContent = styled.div`
  margin: auto;
  top: 10px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  background-color: #FFFFFF;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  min-height: 540px;
  max-width: 708px;

  @media screen and (min-width: 768px) {
    margin: auto;
  }
  @media screen and (min-width: 1280px) {
    margin: auto;
  }
`;

export const ModalBtn = styled.button`
  position: absolute;
  right: 24px;
  top: 24px;
  padding: 0;
  background-color: transparent;
  border: none;

  cursor: pointer;
  transition: transform 300ms ease;
  &:hover,
  &:focus {
    transform: scale(1.2);
    transition: transform 300ms ease;
  }
`