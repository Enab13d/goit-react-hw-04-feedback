import styled from "@emotion/styled";
import { theme } from "constants";

export const Wrapper = styled.div`
background-color: ${theme.colors.white};
width: 400px;
margin: auto;
margin-top: ${theme.sizing(4)};
padding: ${theme.sizing(4)};
height: 600px;
border: 3px solid ${theme.colors.formBorder};
border-radius: 8px;
color: ${theme.colors.black};
box-shadow: ${theme.shadow};
`