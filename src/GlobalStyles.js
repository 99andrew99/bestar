import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @font-face {
    font-family: 'Pretendard';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');}

    

    body {
        font-family: 'Pretendard', sans-serif;
        margin: 0;

        input{
            font-family: 'Pretendard', sans-serif;
        }

        ::placeholder {
            font-family: 'Pretendard', sans-serif;
            color: #A9A9A9;
            font-weight: 500;
            letter-spacing: -1px;
    }
    }

`;
