import styled from "@emotion/styled";
import { theme } from "constants";

export const Experience = styled.select`
    height: 44px;
    width: 100%;
    background-color: ${theme.colors.white};
    border: none;
    outline: none;
    overflow: hidden;
    &:hover, &:focus {
        border: 0;
    }
`;

export const Feedback = styled.option`
width: 60px;
font-size: 14px;
font-weight: 600;
background-color: ${theme.colors.white};
padding: 10px 0;
text-align: center;
margin-right: 20px;
display: inline-block;
cursor: pointer;
border: 1px solid ${theme.colors.formBorder};
border-radius: 8px;
color: ${theme.colors.black};
&:hover {
    color: ${theme.colors.white};
    background-color: ${theme.colors.formBorder};
}
`;
