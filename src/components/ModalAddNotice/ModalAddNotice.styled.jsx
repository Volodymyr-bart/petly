import styled from "styled-components";
import { Field } from "formik";

export const FormContainer = styled.div`
    padding: 40px 80px;
    width: 608px;
`

export const RadioBtnBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    gap: 10px;
`

export const RadioBtn = styled.label`
    display: block;
    height: 47px;
    padding: 10px 28px;
    border: 2px solid #F59256;
    border-radius: 40px;
    
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 1.35;
    letter-spacing: 0.04em;

    color: #000000;

    &active{
        background-color: #F59256;
    }
`
