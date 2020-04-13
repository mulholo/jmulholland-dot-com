import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { space, border } from 'styled-system'
import { H1, H2 } from './typography'
import Spacer from '../components/layout/Spacer'

const HeaderContainer = styled.header(
  {
    display: 'flex',
    alignItems: 'baseline',
    width: '100%',
  },
  space,
  border
)
HeaderContainer.defaultProps = {
  px: 6,
  py: 4,
  borderBottom: 1,
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

const Header = ({ pageName }) => (
  <HeaderContainer>
    <Link to='/'>
      <H1 fontSize={4}>
        <J>J</J>
        <Ames>ames </Ames>
        <M>M</M>
        <Ulholland>ulholland</Ulholland>
      </H1>
    </Link>
    {pageName && (
      <>
        <Spacer width={2} />
        <H2 fontSize={4} fontWeight='300'>{`/`}</H2>
        <Spacer width={2} />
        <H2 pLeft={2} fontSize={4} color='n400' fontWeight='500'>
          {pageName}
        </H2>
      </>
    )}
  </HeaderContainer>
)

export default Header
