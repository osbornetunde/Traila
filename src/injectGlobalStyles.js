import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *::before,
    *::after,
    * {
      box-sizing: border-box;
    }

    html,
    body {
        height: 100%;
        font-size: 125.75%;
    }
    body {
        margin: 0;
        padding: 0;
        font-family: "Roboto", sans-serif;
        
    }

    #root {
        min-height: 100vh;
    }
`;

export default GlobalStyle;
