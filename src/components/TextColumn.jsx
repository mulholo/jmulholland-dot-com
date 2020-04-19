import React from 'react'
import Stack from './Stack'
import { media } from '../utils'

const TextColumn = ({ children }) => (
  <div
    css={`
      display: grid;
      grid-template-columns: 2rem 1fr 2rem;
      ${media.tablet`
        grid-template-columns: minMax(2rem, 1fr) 40rem minMax(2rem, 1fr);
      `}
      ${media.desktop`
        grid-template-columns: 2fr 40rem 3fr;
      `}
      };
    `}
  >
    <div />
    <Stack>{children}</Stack>
    <div />
  </div>
)

export default TextColumn
