import React from 'react'
import styled from 'styled-components'
import Footer from './footer'
import Header from './header'
import Meta from './Meta'

const StyledPage = styled.div`
  margin: 0 auto;
  padding: 1.25rem 1rem;
  max-width: 650px;
`
const Layout = ({ children, pathname }) => (
  <StyledPage>
    <Meta pathname={pathname} />
    <Header />
    {children}
    <Footer />
  </StyledPage>
)

export default Layout
