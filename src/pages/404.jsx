import React from 'react'
import { Link } from 'gatsby'
import { css } from 'styled-components'
import { Stack, Grid, Box, Layout } from '../components'
import { media } from '../utils'

const numCss = css`
  font-weight: 800;
  margin: 0;
  flex-grow: 1;
  font-size: ${({ theme }) => theme.fontSizes.s2};
  ${media.tablet`
    font-size: 12rem;
  `}
`

const pCss = css`
  font-size: ${({ theme }) => theme.fontSizes.s1};
  ${media.tablet`
    font-size: ${({ theme }) => theme.fontSizes.s5};
  `}
`

const FourOhFour = ({ location }) => (
  <Layout pageName='Not found' pathname={location.pathname}>
    <Grid>
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
    </Grid>
  </Layout>
)

export default FourOhFour
