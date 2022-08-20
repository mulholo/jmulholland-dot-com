import React from 'react'
import { ThemeProvider } from 'styled-components'
import { MDXProvider } from '@mdx-js/react'
import { theme } from '../../utils'
import { Stack } from '..'
import { GlobalStyle } from './globalStyles'
import Meta from './Meta'
import Header from './Header'
import Footer from './Footer'

export const Layout = ({ children, pathname, pageName }) => (
  <ThemeProvider theme={theme}>
    <MDXProvider>
      <>
        <GlobalStyle />
        <Meta pathname={pathname} />
        <Stack>
          <Header pageName={pageName} />
          {children}
          <Footer />
        </Stack>
      </>
    </MDXProvider>
  </ThemeProvider>
)
