import styled, { createGlobalStyle } from "styled-components";
import { respondTo } from "./_respondTo";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    font-family: 'Lota Grotesque Alt 1', sans-serif;

    ${respondTo.lg`
      font-size: 60%;
    `}

    ${respondTo.md`
      font-size: 54%;
    `}

    ${respondTo.sm`
      font-size: 45%;
    `}
  }

  html, body {
  width: 100%;
  overflow-x: hidden;
}
`;

export const HeaderContainer = styled.div`
  background-color: #fbd224;
  height: 101.236rem;
  display: flex;
  flex-flow: column;

  ${respondTo.sm`
    height: 90rem;
  `}

  ${respondTo.xs`
    height: 70rem;
  `}
`;
