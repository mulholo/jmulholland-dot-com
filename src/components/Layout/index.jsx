import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../utils'
import { Stack } from '..'
import { GlobalStyle } from './globalStyles'
import Meta from './Meta'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children, pathname, pageName }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Meta pathname={pathname} />
      <Stack>
        <Header pageName={pageName} />
        {children}
        <Footer />
      </Stack>
    </>
  </ThemeProvider>
)

export default Layout
