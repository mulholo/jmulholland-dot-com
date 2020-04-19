import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'
import { space, border, layout } from 'styled-system'
import { Spacer } from '..'

const HeaderContainer = styled.header(
  {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    layout: '10px',
  },
  space,
  border,
  layout
)
HeaderContainer.defaultProps = {
  px: 6,
  py: 4,
  borderBottom: 1,
  minHeight: 7,
}

const J = styled.span({
  fontWeight: 'bold',
})

const Ames = styled.span({
  display: 'none',
  '@media (min-width: 30rem)': {
    display: 'inline',
  },
})

const M = styled.span({
  fontWeight: 'bold',
})

const Ulholland = styled.span({
  display: 'none',
  '@media (min-width: 25rem)': {
    display: 'inline',
  },
})

const secondaryCss = css`
  color: ${({ theme }) => theme.colors.n400};
  font-size: ${({ theme }) => theme.fontSizes[4]};
  font-weight: 500;
  padding-left: ${({ theme }) => theme.sizes[2]};
  margin: 0;
  display: ${({ hide }) => (hide ? 'none' : 'block')};
`

const Header = ({ pageName }) => {
  const [linkIsHovered, setLinkIsHovered] = useState(false)
  return (
    <HeaderContainer>
      <Link
        onMouseEnter={() => setLinkIsHovered(true)}
        onMouseLeave={() => setLinkIsHovered(false)}
        to='/'
        css={`
          &:hover h1 {
            color: ${({ theme }) => theme.colors.b400};
          }
        `}
      >
        <h1
          css={`
            font-size: ${({ theme }) => theme.fontSizes[4]};
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
          <Spacer width={2} />
          <h2
            css={`
              font-size: ${({ theme }) => theme.fontSizes[4]};
              font-weight: 300;
              margin: 0;
            `}
          >
            {`/`}
          </h2>
          <Spacer width={2} />
          <h2 hide={linkIsHovered} css={secondaryCss}>
            {pageName}
          </h2>
          <h2 hide={!linkIsHovered} css={secondaryCss}>
            Go home
          </h2>
        </>
      )}
    </HeaderContainer>
  )
}

export default Header
