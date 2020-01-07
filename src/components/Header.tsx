import * as React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import media from '../utils/media'

const SiteName = styled.h1`
  font-size: ${props => props.theme.tLarger};
  margin: 0;
  flex-grow: 1;
`

const StyledHeader = styled.header`
  width: 100%;
  margin: 0 auto;
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

const MobileButton = styled(StyledButton)`
  ${media.tablet`display: none;`}
`

const LinksContainer = styled('div')<{ open: boolean }>`
  ${props =>
    !props.open &&
    `
    display: none;
  `}
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: ${props => props.theme.n900};

  ul {
    display: flex;
    flex-direction: column;
    margin: ${props => props.theme.s4};
    padding: 0;
  }

  li {
    list-style: none;
    font-size: ${props => props.theme.tLargerStill};
  }

  button.close {
    font-size: ${props => props.theme.tLarge};
    color: ${props => props.theme.n500};
    font-weight: ${props => props.theme.bold};
    position: fixed;
    top: ${props => props.theme.s4};
    right: ${props => props.theme.s4};
    border: none;
    background: none;
  }

  ${media.tablet`
    display: block;
    position: static;

    ul {
      flex-direction: row;
      justify-content: flex-end;
      margin: 0;
    }

    li {
      font-size: ${props => props.theme.tLarge};
      margin: 0 0 0 ${props => props.theme.s4};
    }

    button.close {
      width: 0;
      height: 0;
      display: none;
    }
  `}
`

const Header = () => {
  const [menuOpen, setMenuOpen] = React.useState(false)

  const [size, setSize] = React.useState(
    typeof window !== 'undefined' ? window.innerWidth : 1000
  )
  React.useEffect(() => {
    const updateSize = () => {
      setSize(window.innerWidth)
    }
    window.addEventListener('resize', updateSize)
    return () => {
      window.removeEventListener('resize', updateSize)
    }
  })

  return (
    <StyledHeader>
      <StyledHeaderContent>
        <Link to='/' style={{ width: '100%' }}>
          <SiteName>{`J${
            size < 350 ? '.' : 'ames'
          } Mulholland`}</SiteName>
        </Link>
        <MobileButton onClick={() => setMenuOpen(true)}>
          Menu
        </MobileButton>
        <LinksContainer open={menuOpen}>
          <ul>
            <li onClick={() => setMenuOpen(false)}>
              <Link to='/'>Blog</Link>
            </li>
            <li onClick={() => setMenuOpen(false)}>
              <Link to='/thoughts'>Think</Link>
            </li>
          </ul>
          <button
            className='close'
            onClick={() => setMenuOpen(false)}
          >
            X
          </button>
        </LinksContainer>
      </StyledHeaderContent>
    </StyledHeader>
  )
}

export default Header
