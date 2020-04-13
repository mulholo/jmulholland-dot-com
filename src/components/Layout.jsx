import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import theme from '../utils/theme'
import Meta from './Meta'

import './code.css'

const GlobalStyle = createGlobalStyle`
  @import url('https://rsms.me/inter/inter.css');
  @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap');

  html {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.fonts[0]};
  }
  *, *:before, *:after {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-box-sizing: inherit;
    -moz-box-sizing: inherit;
    box-sizing: inherit;
    hyphens: auto;
  }

  body {
    margin: 0;
    background: ${props => props.theme.colors.n900};
  }

  body *::selection {
    background: ${props => props.theme.colors.n100};
    color: ${props => props.theme.colors.n900};
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${props => props.theme.colors.n200};
  }

  p, li, ul, blockquote {
    font-size: ${props => props.theme.fontSizes[2]};
    line-height: 1.625;
    color: ${props => props.theme.colors.n200};
  }
  
  li {
    margin: 0.5rem 0;
  }

  ul {
    padding-left: ${props => props.theme.sizes[4]};
  }

  figure {
    margin: ${props => props.theme.sizes[6]} 0;
  }

  figcaption {
    font-family: ${props => props.theme.fonts[1]};
    font-size: ${props => props.theme.fontSizes[1]};
    text-align: center;
    margin-top: ${props => props.theme.sizes[3]};
    color: ${props => props.theme.colors.n300};
  }
  
  a {
    font-weight: 600;
    text-decoration: none;
    color: ${props => props.theme.colors.b400};
  }

  a:hover {
    color: ${props => props.theme.colors.b500};
  }

  blockquote:before, blockquote:after {
    content: '"'
  }
`

const Layout = ({ children, pathname }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Meta pathname={pathname} />
      {children}
    </>
  </ThemeProvider>
)

export default Layout
