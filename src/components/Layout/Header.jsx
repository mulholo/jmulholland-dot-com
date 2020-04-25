import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'

const J = styled.span`
  font-weight: 800;
`

const Ames = styled.span`
  display: none;
  @media (min-width: 30rem) {
    display: inline;
  }
`

const M = styled.span`
  font-weight: 800;
`

const Ulholland = styled.span`
  display: none;
  @media (min-width: 25rem) {
    display: inline;
  }
`

const secondaryCss = css`
  color: ${({ theme }) => theme.colors.n400};
  font-size: ${({ theme }) => theme.fontSizes.s1};
  font-weight: 500;
  margin: 0;
  display: ${({ hide }) => (hide ? 'none' : 'block')};
`

const Header = ({ pageName }) => {
  const [linkIsHovered, setLinkIsHovered] = useState(false)
  return (
    <header
      css={`
        align-items: center;
        border-bottom: 1px solid ${({ theme }) => theme.colors.n400};
        display: flex;
        min-height: ${({ theme }) => theme.sizes.s3};
        padding: ${({ theme }) =>
          `${theme.sizes.s1} ${theme.sizes.s2}`};
        width: 100%;
      `}
    >
      <Link
        onMouseEnter={() => setLinkIsHovered(true)}
        onMouseLeave={() => setLinkIsHovered(false)}
        to='/'
        css={`
          &:active,
          &:focus,
          &:hover {
            text-decoration: none;
          }
          &:active h1,
          &:focus h1,
          &:hover h1 {
            color: ${({ theme }) => theme.colors.b400};
            text-decoration: none;
            outline: none;
          }
        `}
      >
        <h1
          css={`
            font-size: ${({ theme }) => theme.fontSizes.s1};
            margin: 0;
          `}
        >
          <J>J</J>
          <Ames>ames </Ames>
          <M>M</M>
          <Ulholland>ulholland</Ulholland>
        </h1>
      </Link>
      {pageName && (
        <>
          <h2
            css={`
              font-size: ${({ theme }) => theme.fontSizes.s1}
              font-weight: 300;
              margin: 0 ${({ theme }) => theme.sizes.s0};
            `}
          >
            {`/`}
          </h2>
          <h2 hide={linkIsHovered} css={secondaryCss}>
            {pageName}
          </h2>
          <h2 hide={!linkIsHovered} css={secondaryCss}>
            Go home
          </h2>
        </>
      )}
    </header>
  )
}

export default Header
