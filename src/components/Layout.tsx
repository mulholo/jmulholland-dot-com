import * as React from 'react'
import styled, {
  createGlobalStyle,
  ThemeProvider,
} from '../utils/styled-components'
import theme from '../utils/theme'
import Footer from './Footer'
import Header from './Header'
import Meta from './Meta'
import './Layout.css'

const StyledPage = styled.div``

const GlobalStyle = createGlobalStyle`
  body {
  }
`

const Layout = ({ children, pathname }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <StyledPage>
        <Meta pathname={pathname} />
        <Header />
        {children}
        <Footer />
      </StyledPage>
    </>
  </ThemeProvider>
)

export default Layout
