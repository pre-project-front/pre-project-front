import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}

    * {
    box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: -apple-system,BlinkMacSystemFont,"Segoe UI Adjusted","Segoe UI","Liberation Sans",sans-serif;
        font-weight: 300;
        line-height: 1.4rem;
    }

    h1 {
        font-size: 1.7rem;
        line-height: 2.2rem;
        font-weight: 400;
    }

    a {
        color: #000;
        text-decoration: none;
        outline: none;
        word-break: break-word;
        overflow-wrap: break-word;

        &:active {
            text-decoration: none;
        }
    }

    button {
        border: none;
        background-color: inherit;
    }
`;

export default GlobalStyle;
