import React from 'react'
import TextContainer from './TextContainer'
import { media } from '../utils'

const TextColumn = ({ children }) => (
  <div
    css={`
      display: grid;
      grid-template-columns:
        ${({ theme }) => `${theme.sizes.s2} 1fr ${theme.sizes.s2}`};
        padding: ${({ theme }) => theme.sizes.s2} 0;
      ${media.tablet`
        grid-template-columns:
          ${({ theme }) =>
            `minMax(${theme.sizes.s2} 1fr) 40rem minMax(${theme.sizes.s2}, 1fr)`};
      `}
      ${media.desktop`
        grid-template-columns: 2fr 40rem 3fr;
      `}
      };
    `}
  >
    <div />
    <TextContainer>{children}</TextContainer>
    <div />
  </div>
)

export default TextColumn
