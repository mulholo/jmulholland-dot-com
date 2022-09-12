import React from 'react'
import styled from 'styled-components'
import { RATIO, HEADER_SWITCH_SIZE } from '../utils'

const FootnoteContainer = styled.aside`
  position: relative;
  &:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.sizes.s0};
  }
`

const N = styled.span`
  position: absolute;
  left: -${({ theme }) => theme.sizes.s0};
  top: 0;
  color: ${({ theme }) => theme.colors.b400};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`

export const FootnoteN = styled.sup`
  color: ${({ theme }) => theme.colors.b400};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: ${({ theme }) => theme.fontSizes['s-1']};
`

export const Footnote = ({ children, n }) => (
  <FootnoteContainer>
    {n && <N>{n}</N>}
    {children}
  </FootnoteContainer>
)

export const FootnoteStack = styled.div`
  &&& {
    margin: 0 0 0 ${({ theme }) => theme.sizes.s3};
    position: absolute;
    top: 5px;

    font-family: ${({ theme }) => theme.fonts.sans};
    font-size: ${({ theme }) => theme.fontSizes['s-1']};
    line-height: ${RATIO};
    color: ${({ theme }) => theme.colors.n400};

    left: calc(100% + ${({ theme }) => theme.sizes.s0});
    right: -20rem;

    @media (min-width: ${HEADER_SWITCH_SIZE}) {
      left: ${(1 / RATIO) * 100}%;
      right: 0;
    }
  }
`

export const FootnoteParagraphWrapper = styled.div`
  && {
    position: relative;
    overflow-y: initial;
    overflow-x: initial;

    @media (min-width: ${HEADER_SWITCH_SIZE}) {
      width: 100%;

      & > *:not(${FootnoteStack}) {
        margin-right: ${(1 - 1 / RATIO) * 100}%;
      }
    }
  }
`
