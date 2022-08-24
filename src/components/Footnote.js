import React from 'react'
import styled from 'styled-components'
import { RATIO } from '../utils'

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
    right: 0;
    top: 5px;
    left: ${(1 / RATIO) * 100}%;

    font-family: ${({ theme }) => theme.fonts.sans};
    font-size: ${({ theme }) => theme.fontSizes['s-1']};
    line-height: ${RATIO};
    color: ${({ theme }) => theme.colors.n400};
  }
`

export const FootnoteParagraphWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 100%;
  margin-right: 0;

  & > *:not(${FootnoteStack}) {
    margin-right: ${(1 - 1 / RATIO) * 100}%;
  }
`
