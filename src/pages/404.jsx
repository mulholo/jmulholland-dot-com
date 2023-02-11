import React from 'react'
import { Link } from 'gatsby'
import { css } from 'styled-components'
import { Stack, Box, Layout } from '../components'

const numCss = css`
  font-weight: 800;
  margin: 0;
  flex-grow: 1;
  font-size: ${({ theme }) => theme.fontSizes.s2};

  @media (min-width: ${780 / 16}em) {
    font-size: 12rem;
  }
`

const pCss = css`
  font-size: ${({ theme }) => theme.fontSizes.s1};
  @media (min-width: ${780 / 16}em) {
    font-size: ${({ theme }) => theme.fontSizes.s5};
  }
`

const FourOhFour = ({ location }) => (
  <Layout pageName='Not found' pathname={location.pathname}>
    <div>
      <Box padding={6}>
        <Stack>
          <h2 css={numCss}>4</h2>
        </Stack>
      </Box>
      <Box padding={6}>
        <h2 css={numCss}>0</h2>
      </Box>
      <Box padding={6}>
        <h2 css={numCss}>4</h2>
      </Box>
      <Box padding={6}>
        <p css={pCss}>
          There's a page here, just not the one you were looking for.
        </p>
        <p css={pCss}>
          <Link to='/'>Go home</Link>
        </p>
      </Box>
    </div>
  </Layout>
)

export default FourOhFour
