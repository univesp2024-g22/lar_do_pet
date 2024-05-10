import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
:root {
  /* --color01: #e9f2f2;
  --color02: #f2ae2e;
  --color03: #f29829;
  --color04: #f2762e;
  --color05: #f25050;
  --color06: #f29829a6; */

    //paleta de cores
  --branco: #FFFFFF; // branco
  --vermelho: #ff0f0f; // vermelho
  --amarelo: #e0be7e; // amarelo
  --verde: #438E82; // verde

}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }

    @media (max-width: 600px) {
      font-size: 81.25%; // 13px
    }

    @media (max-width: 320px) {
      font-size: 75%; // 12px
    }

    @media (max-width: 280px) {
      font-size: 68.75%; // 11px
    }
  }

  body {
    background-color: var(--color01);
    -webkit-font-smoothing: antialiased;
    padding-top: 4rem;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button, a {
    cursor: pointer;
    text-decoration: none;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const Container = styled.main`
  max-width: 1240px;
  margin: auto auto;
  padding: 1rem;
  background-color: var(--color03);
  // height: 84.5vh;
`;
