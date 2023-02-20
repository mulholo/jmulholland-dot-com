import React from 'react'
import { Link } from 'gatsby'
import { css } from 'styled-components'
import { Stack, Layout } from '../components'
import { BUG_REPORT_LINK } from '../utils'

const pCss = css`
  font-size: ${({ theme }) => theme.fontSizes.s0};
`

const FourOhFour = ({ location }) => (
  <Layout pageName='Not found' pathname={location.pathname}>
    <Stack spacer='s1'>
      <h2
        css={css`
          font-size: ${({ theme }) => theme.fontSizes.s2};
        `}
      >
        404
      </h2>
      <p css={pCss}>
        The page you were looking for doesn't exist or has moved
        somewhere else.
      </p>
      <p css={pCss}>
        <ul>
          <li>
            <Link to='/'>Go home</Link>
          </li>
          <li>
            <a href={BUG_REPORT_LINK}>Report an issue</a>
          </li>
        </ul>
      </p>
    </Stack>
  </Layout>
)

export default FourOhFour
