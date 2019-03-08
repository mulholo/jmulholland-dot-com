import * as React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Footer from './Footer'
import Header from './Header'
import Meta from './Meta'
import './Layout.css'
import theme from '../utils/theme'

const StyledPage = styled.div`
  margin: 0 auto;
  padding: 1.25rem 1rem;
  max-width: 650px;
`

const Layout = ({ children, pathname }) => (
  <ThemeProvider theme={theme}>
    <StyledPage>
      <Meta pathname={pathname} />
      <Header />
      {children}
      <Footer />
    </StyledPage>
  </ThemeProvider>
)

export default Layout
