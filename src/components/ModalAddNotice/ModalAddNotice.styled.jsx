import styled from 'styled-components';
import { ErrorMessage, Field, Form } from 'formik';

export const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  padding: 40px 80px;
  width: 608px;
`;

export const Container = styled.div`
  margin-top: 20px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

export const TitleModal = styled.h1`
  margin: 0 auto;
  font-weight: 600;
  font-size: 36px;
  line-height: 1.36;
  color: #000000;
`;

export const Description = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  text-align: center;
  letter-spacing: -0.01em;
  color: #000000;
`;

export const RadioBtnBox = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 10px;
  list-style: none;
`;

export const RadioItems = styled.li`
  margin: 0;
`

export const RadioInput = styled(Field)`
  display: none;
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
`;

export const RadioBtnCategory = styled.label`
  display: block;
  border: 2px solid #f59256;
  border-radius: 40px;
  padding: 10px 28px;


  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.35;
  letter-spacing: 0.04em;

  color: #000000;

  &.active {
    background-color: #f59256;
    color: #FFFFFF;
  }
`;

export const FieldStyled = styled(Field)`
  width: 448px;
  height: 48px;
  padding: 11px 45px 11px 14px;
  font-size: 16px;
  line-height: 1.6;
  letter-spacing: 0.04em;
  background: #fdf7f2;
  color: rgba(17, 17, 17, 0.6);
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  :hover,
  :focus {
    cursor: pointer;
    outline: 2px solid #f59256;
  }
`;
export const LabelField = styled.label`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
export const LabelFieldMyPetPhoto = styled.label`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
`;
export const LabelFieldMyPetComment = styled.label`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
`;
export const LabelFieldTitle = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 1.08;
  color: #000000;
  span {
    color: #f59256;
  }
`;
export const ErrorText = styled(ErrorMessage)`
  display: block;
  margin-top: 10px;
  color: red;
`;
export const ContainerButton = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  gap: 20px;
`;

export const Button = styled.button`
  width: 180px;
  padding: 10px 28px;
  background: #f59256;
  border-radius: 40px;
  border: none;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.35;
  letter-spacing: 0.04em;
  color: #ffffff;

  &.disabled{
    background-color: #dca481;
  }
`;

export const CancelBack = styled.button`
  width: 180px;
  padding: 10px 28px;
  background: #ffffff;
  border-radius: 40px;
  border: 2px solid #f59256;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.35;
  letter-spacing: 0.04em;
  color: #000000;
`;

// Step 2

export const ContainerSex = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  margin-bottom: 20px;
  gap: 28px;
`;
export const TitleInput = styled.div`
  font-weight: 500;
  font-size: 24px;
  line-height: 1.08;
  color: #000000;
  span {
    color: #f59256;
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
`;
export const ContainerSexVariant = styled.div`
  display: flex;
  gap: 95px;
`;
export const Icon = styled.div`
  display: block;
  width: 60px;
  height: 60px;

  margin-bottom: 20px;
  
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
  font-size: 20px;
  line-height: 26px;
  :hover {
    color: #f59256;
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
  width: 140px;
  height: 140px;

  background: #FDF7F2;
  border-radius: 20px;
  border: transparent;
`

export const CommentField = styled(Field)`
  width: 448px;
  min-height: 113px;
  padding: 16px 18px;
  resize: none;
  margin: 0;

  font-size: 16px;
  line-height: 1.6;
  letter-spacing: 0.04em;
  background: #fdf7f2;
  color: rgba(17, 17, 17, 0.6);
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 20px;
  :hover,
  :focus {
    cursor: pointer;
    outline: 2px solid #f59256;
  }`
