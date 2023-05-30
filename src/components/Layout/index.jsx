import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { MDXProvider } from '@mdx-js/react'
import { Link } from 'gatsby'
import { theme, HEADER_SWITCH_SIZE } from '../../utils'
import {
  Footnote,
  FootnoteStack,
  FootnoteN,
  FootnoteParagraphWrapper,
} from '..'
import { GlobalStyle } from './globalStyles'
import { Header } from './Header'
import { Meta } from './Meta'
import { Footer } from './Footer'

const Container = styled.div`
  display: grid;
  position: relative;
  flex: 1;
  font-size: ${({ theme }) => theme.fontSizes.s5};
  overflow-x: clip;

  grid-auto-rows: auto 1fr auto;
  grid-template-columns:
    minmax(${({ theme }) => theme.sizes.s2}, auto)
    minmax(16rem, 40rem) minmax(${({ theme }) => theme.sizes.s3}, auto);
  grid-template-areas:
    'header header header'
    'spacera main spacerb'
    'footer footer footer';

  @media (min-width: ${HEADER_SWITCH_SIZE}) {
    grid-auto-rows: 1fr auto;
    grid-template-columns:
      minmax(${({ theme }) => theme.sizes.s0}, 1fr)
      8fr 62rem 8fr;
    grid-template-areas:
      'spacera header main spacerb'
      'footer footer footer footer';
  }
`

const SpacerA = styled.div`
  grid-area: spacera;
`

const SpacerB = styled.div`
  grid-area: spacerb;
`

const Content = styled.div`
  grid-area: main;
  padding: ${({ theme }) => theme.sizes.s2} 0;
`

// Make these components available globally in .mdx files
const SHORT_CODES = {
  Footnote,
  FootnoteN,
  FootnoteStack,
  FootnoteParagraphWrapper,
  Link,
}

export const Layout = ({ children, pathname }) => (
  <ThemeProvider theme={theme}>
    <MDXProvider components={SHORT_CODES}>
      <>
        <GlobalStyle />
        <Meta pathname={pathname} />
        <Container>
          <SpacerA />
          <Header />
          <Content>{children}</Content>
          <SpacerB />
          <Footer />
        </Container>
      </>
    </MDXProvider>
  </ThemeProvider>
)
