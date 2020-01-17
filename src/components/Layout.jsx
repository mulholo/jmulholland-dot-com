import React from 'react'
import styled, {
  createGlobalStyle,
  ThemeProvider,
} from 'styled-components'
import theme from '../utils/theme'
import Footer from './Footer'
import Header from './Header'
import Meta from './Meta'
import './code.css'

const GlobalStyle = createGlobalStyle`
  @import url('https://rsms.me/inter/inter.css');

  @supports (font-variation-settings: normal) {
    html {
      font-family: ${({ theme }) => theme.fontStack};
    }
  }

  html {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.fontStackFallback};
  }
  *, *:before, *:after {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-box-sizing: inherit;
    -moz-box-sizing: inherit;
    box-sizing: inherit;
    }

  body {
    color: ${props => props.theme.n400};
    background: ${props => props.theme.n800};
    margin: 0;
  }

  p {
    font-size: ${props => props.theme.tMedium};
  }

  body *::selection {
    background: ${props => props.theme.b500};
    color: ${props => props.theme.n900};
  }
  
  span, p, li, ul, span, blockquote {
    line-height: 1.45;
    color: ${props => props.theme.n400};
  }
  
  a {
    line-height: 1.45;
    color: ${props => props.theme.b500};
    font-weight: ${props => props.theme.semiBold};
    text-decoration: none;
  }

  a:hover {
    color: ${props => props.theme.b600};
  }

  h1, h2, h3, h4, h5, h6   {
    color: ${props => props.theme.n200};
  }

  h1 {
    font-size: ${props => props.theme.tLargest};
  }

  h2 {
    font-size: ${props => props.theme.tLargerStill};
  }

  h3 {
    font-size: ${props => props.theme.tLarger};
  }

  h4 {
    font-size: ${props => props.theme.tLarge};
  }

  h5 {
    font-size: ${props => props.theme.tMediumLarge};
  }

  h6 {
    font-size: ${props => props.theme.tMedium};
  }

  blockquote {
    margin-left: -1.5rem;
    margin-right: 1.5rem;
    padding-left: 1.5rem;
    border-left: 4px solid ${props => props.theme.b400};
    font-style: italic;
    font-size: ${props => props.theme.tLarger};
  }

  blockquote:before, blockquote:after {
    content: '"'
  }
`

const StyledPage = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: space-between;
`

const StyledContent = styled.div`
  max-width: ${props => props.theme.lg};
  width: 100%;
  margin: 0 auto;
  padding: ${props => props.theme.s3};

  img {
    width: 100%;
  }
`

const Layout = ({ children, pathname }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Meta pathname={pathname} />
      <StyledPage>
        <Header />
        <StyledContent>{children}</StyledContent>
        <Footer />
      </StyledPage>
    </>
  </ThemeProvider>
)

export default Layout
