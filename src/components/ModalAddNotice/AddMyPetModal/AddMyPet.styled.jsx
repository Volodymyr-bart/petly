import styled from 'styled-components';
import { Form } from 'formik';

export const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  padding: 40px 80px;
  width: 608px;
`;

export const ContainerButton = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  gap: 20px;
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