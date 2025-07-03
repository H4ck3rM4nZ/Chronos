import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.tsx'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/themes/globalStyle'

import { darkTheme } from './styles/themes/darkTheme.ts'
// import { lightTheme } from './styles/themes/lightTheme.ts'

import './styles/reset.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </StrictMode>
)
