import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root {
  //paleta de cores
  --color01: #FFFFFF; // branco
  --color02: #ff0f0f; // vermelho
//  --color03: #f29829;
//  --color04: #f2762e;
  --color05: #e0aa2f; // amarelo
  --color06: #438E82; // verde

  
  position: relative;
  min-height: 100vh;
}

//reset css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  //tamanho padrão das fontes por tamanho de tela
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
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
