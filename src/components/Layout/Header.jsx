import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import {
  useClickOutside,
  YOUTUBE_LINK,
  HEADER_SWITCH_SIZE,
} from '../../utils'
import { Icon } from '..'

const Container = styled.div`
  grid-area: header;
  width: 100%;
  max-width: 100vw;
`

const DesktopHeaderContainer = styled.header`
  padding-top: ${({ theme }) => theme.sizes.s2};
  padding-right: ${({ theme }) => theme.sizes.s3};
  flex-direction: column;

  display: none;
  @media (min-width: ${HEADER_SWITCH_SIZE}) {
    display: flex;
  }
`

const MobileHeaderContainer = styled.header`
  padding: ${({ theme }) => theme.sizes.s0};

  border-bottom: 1px solid ${({ theme }) => theme.colors.n100};
  display: flex;
  flex-direction: column;

  @media (min-width: ${HEADER_SWITCH_SIZE}) {
    display: none;
  }
`

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.s1};
  margin-bottom: ${({ theme }) => theme.sizes.s1};
  text-decoration: none;
`

const MobileTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.s1};
  text-decoration: none;
`

const SubTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.s0};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-top: ${({ theme }) => theme.sizes.s0};
  margin-bottom: ${({ theme }) => theme.sizes['s-1']};
`

const MenuList = styled.ul`
  list-style: none;
  font-size: ${({ theme }) => theme.fontSizes.s0};
  padding: 0;
  display: flex;
  flex-direction: column;
`

const MenuListItem = styled.li`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.sans};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
`

const HeaderLink = styled(Link)`
  font-weight: ${({ theme }) => theme.fontWeights.regular};

  &,
  &:focus,
  &:active {
    text-decoration: none;
  }
`

const HeaderA = styled.a`
  font-weight: ${({ theme }) => theme.fontWeights.regular};

  &,
  &:focus,
  &:active {
    text-decoration: none;
  }
`

const MenuContent = () => (
  <>
    <SubTitle>Content</SubTitle>
    <MenuList>
      <MenuListItem>
        <HeaderLink to='/blog'>Blog</HeaderLink>
      </MenuListItem>
      <MenuListItem>
        <HeaderLink to='/notes'>Notes</HeaderLink>
      </MenuListItem>
      <MenuListItem>
        <HeaderA href={YOUTUBE_LINK}>YouTube</HeaderA>
      </MenuListItem>
    </MenuList>
    <SubTitle>About</SubTitle>
    <MenuList>
      <MenuListItem>
        <MenuListItem>
          <HeaderLink to='/thoughts'>Thoughts</HeaderLink>
        </MenuListItem>
        <MenuListItem>
          <HeaderLink to='/projects'>Projects</HeaderLink>
        </MenuListItem>
        <MenuListItem>
          <HeaderLink to='/uses'>Uses</HeaderLink>
        </MenuListItem>
      </MenuListItem>
    </MenuList>
  </>
)

const DesktopHeader = ({ className }) => (
  <DesktopHeaderContainer className={className}>
    <HeaderLink to='/'>
      <Title>James Mulholland</Title>
    </HeaderLink>
    <MenuContent />
  </DesktopHeaderContainer>
)

const MobileHeaderTopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const BurgerButton = styled.button`
  border: none;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  color: ${({ theme }) => theme.colors.n100};
`

const MobileHeader = () => {
  const [open, setOpen] = React.useState(false)
  const close = () => setOpen(false)
  const toggleOpen = () => setOpen((o) => !o)

  const menuRef = React.useRef()
  useClickOutside(menuRef, close)

  return (
    <MobileHeaderContainer ref={menuRef}>
      <MobileHeaderTopRow>
        <HeaderLink to='/'>
          <MobileTitle>James Mulholland</MobileTitle>
        </HeaderLink>
        <BurgerButton
          ariaLabel='Toggle menu open'
          onClick={toggleOpen}
        >
          {open ? <Icon.Close /> : <Icon.Burger />}
        </BurgerButton>
      </MobileHeaderTopRow>
      {open && <MenuContent />}
    </MobileHeaderContainer>
  )
}

export const Header = () => {
  return (
    <Container>
      <MobileHeader />
      <DesktopHeader />
    </Container>
  )
}
