import styled from 'styled-components';

export const UserPageStyled = styled.div`
  @media (min-width: 768px) {
    /* margin-bottom: 22px; */
  }
  @media (min-width: 1280px) {
    /* margin-bottom: 22px; */
  }
`;

export const PetsDataHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 26px;
  @media (min-width: 768px) {
    margin-bottom: 22px;
  }
  @media (min-width: 1280px) {
    margin-bottom: 24px;
  }
`;

export const PetsParagraph = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  letter-spacing: 0.04em;
  color: #111;
  @media (min-width: 768px) {
    font-size: 28px;
    line-height: 38px;
  }
  @media (min-width: 1280px) {
    font-size: 28px;
    line-height: 38px;
  }
`;

export const AddPet = styled.button`
  cursor: pointer;
  width: 40px;
  height: 40px;
  background-color: #f59256;
  border-radius: 50%;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
  }
  @media (min-width: 1280px) {
  }
`;

export const AddPetText = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  color: #111111;
  margin-right: 15px;
  margin-left: auto;
  @media (min-width: 768px) {
  }
  @media (min-width: 1280px) {
  }
`;

export const PetsList = styled.ul`
  list-style: none;
  @media (min-width: 768px) {
  }
  @media (min-width: 1280px) {
  }
`;
