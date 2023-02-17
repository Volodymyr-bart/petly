import styled from 'styled-components';
import { ErrorMessage, Field, Form } from 'formik';

export const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  padding: 40px 20px;
  width: 280px;

  @media (min-width: 768px) {
    padding: 40px 80px;
    width: 608px;
  }
`;

export const Container = styled.div`
  margin-top: 20px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media screen and (min-width: 768px) {
    gap: 28px;
  }
`;

export const TitleModal = styled.h1`
  margin: 0 auto;
  font-weight: 500;
  font-size: 24px;
  line-height: 1.37;
  color: #000000;

  @media screen and (min-width: 768px) {
  font-weight: 600;
  font-size: 36px;
  line-height: 1.36;
  }
`;

export const Description = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.37;
  text-align: center;
  letter-spacing: -0.01em;
  color: #000000;

  @media screen and (max-width: 767px) {
    font-size: 20px;
    line-height: 1.35;
  }

`;

export const RadioBtnBox = styled.ul`
  margin-top: 12px;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: flex-start;
  gap: 8px;
  list-style: none;

  @media screen and (max-width: 767px) {
    gap: 10px;
  }

`;

export const RadioItems = styled.li`
  margin: 0;
`

export const RadioInput = styled(Field)`
  /* display: none; */
  &.hidden {
    opacity: 0;
    height: 0;
    width:0;
    line-height: 0;
    overflow: hidden;
    padding: 0;
    margin: 0;
  }
`

export const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 28px;
  gap: 28px;
  @media screen and (min-width: 768px) {
    gap: 28px;
  }
`;

export const RadioBtnCategory = styled.label`
  display: block;
  border: 2px solid #f59256;
  border-radius: 40px;
  padding: 8px 25px;
  
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.35;
  letter-spacing: 0.04em;

  color: #000000;
  cursor: pointer;

  &.active {
    background-color: #f59256;
    color: #FFFFFF;
  }
  @media screen and (min-width: 768px) {
    font-size: 20px;
    padding: 10px 28px;

  }

`;

export const FieldStyled = styled(Field)`
  width: 100%;
  height: 40px;
  padding: 11px 14px;
  font-size: 14px;
  line-height: 1.35;
  letter-spacing: 0.04em;
  background: #fdf7f2;
  color: #000000;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  :hover,
  :focus {
    cursor: pointer;
    outline: 2px solid #f59256;
  }

  @media screen and (min-width: 768px) {
    width: 448px;
    height: 48px;
    padding: 11px 16px;
    font-size: 16px;
    line-height: 1.6;
    letter-spacing: 0.04em;

  }
`;
export const LabelField = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (min-width: 768px) {
    gap: 12px;
  }
`;
export const LabelFieldMyPetPhoto = styled.label`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;

  @media screen and (min-width: 768px) {
    gap: 12px;
  }
`;
export const LabelFieldMyPetComment = styled.label`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;

  @media screen and (min-width: 768px) {
    gap: 28px;
  }
`;
export const LabelFieldTitle = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.44;
  color: #000000;
  span {
    color: #f59256;
  }

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1.08;
  }
`;
export const LabelFieldTitleMyPet = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.37;
  color: #000000;
  span {
    color: #f59256;
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 1.35;
  }
`;
export const ContainerButton = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 12px;

  @media screen and (min-width: 768px) {
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: row;
    gap: 20px;

  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 9px 101px;
  background: #f59256;
  border-radius: 40px;
  border: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.37;
  letter-spacing: 0.04em;
  color: #ffffff;
  cursor: pointer;
  &.disabled{
      background-color: #dca481;
      &:hover {
        background-color: #dca481;
        -webkit-animation: none;
        -webkit-transform: none;
        animation: none;
        transform: none;
      }
  }

  &:hover {
    background-color: #f59256;
    color: #ffffff;
    -webkit-animation: none;
    -webkit-transform: scale(1.05);
    animation: none;
    transform: scale(1.05);
  }

  @media screen and (min-width: 768px) {
    width: 180px;
    padding: 10px 28px;
    font-size: 20px;
    line-height: 1.35;
  }
`;

export const CancelBack = styled.button`
  width: 100%;
  padding: 9px 28px;
  background: #ffffff;
  border-radius: 40px;
  border: 2px solid #f59256;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.37;
  letter-spacing: 0.04em;
  color: #000000;
  cursor: pointer;

  &:hover {
    background-color: #f59256;
    color: #ffffff;
    -webkit-animation: none;
    -webkit-transform: scale(1.05);
    animation: none;
    transform: scale(1.05);
  }

  @media screen and (min-width: 768px) {
    width: 180px;
    padding: 10px 28px;
    font-size: 20px;
    line-height: 1.35;
  }
`;

// Step 2

export const ContainerSex = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-bottom: 12px;
  gap: 12px;

  @media screen and (min-width: 768px) {
    margin-top: 40px;
    margin-bottom: 20px;
    gap: 28px;
  }
`;

export const TitleInputMyPet = styled.div`
  text-align: center;
  font-weight: 500;
  font-size: 24px;
  line-height: 1.08;
  color: #000000;
  span {
    color: #f59256;
  }

  @media screen and (min-width: 768px) {
    gap: 28px;
  }
`;
export const ContainerSexVariant = styled.div`
  display: flex;
  gap: 40px;

  @media screen and (min-width: 768px) {
    gap: 95px;
  }
`;
export const Icon = styled.div`
  display: block;
  width: 54px;
  height: 54px;

  margin-bottom: 12px;

  cursor: pointer;
  
  @media screen and (min-width: 768px) {
    width: 60px;
    height: 60px; 
    margin-bottom: 20px; 
  }
`;
export const SexLabel= styled.label`
  &.active{
    color: #f59256;
  }

`
export const SexRadioInput = styled(Field)`
  display: none;
`

export const Sex = styled.span`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.47;

  cursor: pointer;
  :hover {
    color: #f59256;
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 1.3;
  }
`;

export const DefaultLoadImg = styled.input`
  /* display: none; */
  &.hidden {
    opacity: 0;
    height: 0;
    width:0;
    line-height: 0;
    overflow: hidden;
    padding: 0;
    margin: 0;
  }
`

export const LoadImg = styled.button`
  width: 116px;
  height: 116px;

  background: #FDF7F2;
  border-radius: 20px;
  border: transparent;

  cursor: pointer;

  @media screen and (min-width: 768px) {
  width: 140px;
  height: 140px;
  }
`

export const LoadImgMyPet = styled.button`
  width: 208px;
  height: 208px;

  background: #FDF7F2;
  border-radius: 20px;
  border: transparent;

  @media screen and (min-width: 768px) {
  width: 182px;
  height: 182px;
  margin-bottom: 20px;
  }
`

export const CommentField = styled(Field)`
  width: 100%;
  min-height: 40px;
  padding: 11px 14px;
  resize: none;
  margin: 0;

  font-size: 14px;
  line-height: 1.35;
  letter-spacing: 0.04em;
  background: #fdf7f2;
  color: #000000;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 20px;
  :hover,
  :focus {
    cursor: pointer;
    outline: 2px solid #f59256;
  }

  @media screen and (min-width: 768px) {
    width: 448px;
    min-height: 113px;
    padding: 16px 18px;
    font-size: 16px;
    line-height: 1.6;
  }
`
export const BoxForInput = styled.div`
position: relative;
`

export const ErrorMessageStyled = styled(ErrorMessage)`
  position: absolute;
  left: 200px;
  bottom: 60px;

  font-size: 16px;
  color: #9d3158;

  @media screen and (min-width: 768px) {
  font-size: 18px;
  }
`

export const ErrorMessageComments = styled(ErrorMessage)`
  position: absolute;
  left: 200px;
  bottom: 125px;

  font-size: 16px;
  color: #9d3158;

  @media screen and (min-width: 768px) {
  font-size: 18px;
  }
`

export const ErrorMessageSex = styled(ErrorMessage)`
  position: absolute;
  left: 200px;
  bottom: 132px;

  font-size: 16px;
  color: #9d3158;

  @media screen and (min-width: 768px) {
  font-size: 18px;
  }
`