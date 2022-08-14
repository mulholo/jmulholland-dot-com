import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { MDXProvider } from '@mdx-js/react'
import { theme } from '../../utils'
import { Stack, TextColumn } from '..'
import { GlobalStyle } from './globalStyles'
import Meta from './Meta'
import Header from './Header'
import Footer from './Footer'

const isFootnote = (child) => child.props.className === 'footnotes'

const WrapperWrapper = styled.div`
  position: relative;
`

function Wrapper({ children }) {
  const bodyChildren = children.filter((c) => !isFootnote(c))
  const footnotes = children.find(isFootnote)

  return (
    <WrapperWrapper>
      <TextColumn footnotes={footnotes}>
        {bodyChildren}
      </TextColumn>
    </WrapperWrapper>
  )
}

const components = {
  wrapper: Wrapper,
}

const Layout = ({ children, pathname, pageName }) => (
  <ThemeProvider theme={theme}>
    <MDXProvider components={components}>
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

export default Layout
