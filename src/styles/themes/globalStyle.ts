import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.colorBg};
    color: ${({ theme }) => theme.colorText};
    transition: all 0.5s ease-in-out;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
