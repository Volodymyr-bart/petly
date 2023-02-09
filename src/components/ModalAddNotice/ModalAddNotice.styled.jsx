import styled from 'styled-components';
import { Field } from 'formik';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 80px;
  width: 608px;
`;

export const TitleModal = styled.h1`
  margin: 0 auto;
  font-weight: 600;
  font-size: 36px;
  line-height: 1.36;
  color: #000000;
`;

export const Description = styled.p`
  margin: 20px auto 0;
`;

export const RadioBtnBox = styled.ul`
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  margin-top: 28px;
  gap: 10px;
  list-style: none;
`;
export const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 28px;
  gap: 28px;
  /* background-color: #3924a5; */
`;

export const RadioBtn = styled.label`
  display: block;
  border: 2px solid #f59256;
  border-radius: 40px;

  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.35;
  letter-spacing: 0.04em;

  color: #000000;

  &active {
    background-color: #f59256;
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
export const LabelFieldTitle = styled.div`
  font-weight: 500;
  font-size: 24px;
  line-height: 1.08;
  color: #000000;
  span {
    color: #f59256;
  }
`;
export const ErrorText = styled.div`
  display: block;
  margin-top: 10px;
  color: red;
`;
export const ContainerButton = styled.div`
  margin: 40px auto 0;
  display: flex;
  gap: 20px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px 28px;
  background: #f59256;
  border-radius: 40px;
  border: none;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.35;
  letter-spacing: 0.04em;
  color: #ffffff;
`;

export const CancelBack = styled.button`
  width: 100%;
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
