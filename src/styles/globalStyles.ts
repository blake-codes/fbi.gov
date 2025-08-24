import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');

  *, *::before, *::after {
    box-sizing: border-box;  /* Apply to everything */
  }

  body {
    font-family: 'Roboto', Arial, sans-serif;
    margin: 0;
    padding: 0;
    background: white;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    overflow-x: hidden; /* Prevents horizontal scroll */
  }

  h1, h2, h3 {
    color: #333;
  }

  footer {
    margin-top: auto;
  }
`;
