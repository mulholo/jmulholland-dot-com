import * as React from 'react'
import { Link } from 'gatsby'
import styled from '../utils/styled-components'

const SiteName = styled.h1`
  font-size: ${props => props.theme.tLarger};
  margin: 0;
`

const StyledHeader = styled.header`
  width: 100%;
  margin: auto;
  box-shadow: ${props => props.theme.shadow2};
  background: ${props => props.theme.n900};
`

const StyledHeaderContent = styled.header`
  max-width: ${props => props.theme.lg};
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${props => props.theme.s4} ${props => props.theme.s4};

  a {
    text-decoration: none;
  }
`

const StyledButton = styled.button`
  color: ${props => props.theme.n900};
  background: ${props => props.theme.b500};
  border-radius: ${props => props.theme.border};
  font-weight: ${props => props.theme.bold};
  box-shadow: ${props => props.theme.shadow1};
  font-size: ${props => props.theme.tMedium};
  padding: ${props => props.theme.s1} ${props => props.theme.s3};
`

const Header = () => {
  const [size, setSize] = React.useState(window.innerWidth)

  React.useEffect(() => {
    const updateSize = () => {
      setSize(window.innerWidth)
    }
    window.addEventListener('resize', updateSize)
    return () => {
      window.removeEventListener('resize', updateSize)
    }
  })
  console.log(size)
  return (
    <StyledHeader>
      <StyledHeaderContent>
        <Link to='/'>
          <SiteName>{`J${
            size < 350 ? '.' : 'ames'
          } Mulholland`}</SiteName>
        </Link>
        <StyledButton>Menu</StyledButton>
      </StyledHeaderContent>
    </StyledHeader>
  )
}

export default Header
