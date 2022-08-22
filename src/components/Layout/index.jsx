import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { MDXProvider } from '@mdx-js/react'
import { theme, YOUTUBE_LINK } from '../../utils'
import { Stack } from '..'
import { GlobalStyle } from './globalStyles'
import Meta from './Meta'
import Footer from './Footer'
import { Link } from 'gatsby'

const Container = styled.div`
  display: grid;
  position: relative;
  flex: 1;
  font-size: ${({ theme }) => theme.fontSizes.s5};
  grid-template-columns: minmax(${({ theme }) => theme.sizes.s0}, 1fr) 8fr 60rem 8fr;
`

const Header = styled.div`
  padding-top: ${({ theme }) => theme.sizes.s2};
  padding-right: ${({ theme }) => theme.sizes.s0};
`

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.s1};
  margin-bottom: ${({ theme }) => theme.sizes.s1};
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

  &:focus, &:active {
    text-decoration: none;
  }
`

const HeaderA = styled.a`
  font-weight: ${({ theme }) => theme.fontWeights.regular};
`

const Content = styled.div`
  padding: ${({ theme }) => theme.sizes.s2} 0;
`

export const Layout = ({ children, pathname }) => (
  <ThemeProvider theme={theme}>
    <MDXProvider>
      <>
        <GlobalStyle />
        <Meta pathname={pathname} />
        <Stack>
          <Container>
            <div /> {/* Spacer */}
            <Header>
              <HeaderLink to='/'>
                <Title>James Mulholland</Title>
              </HeaderLink>
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
            </Header>
            <Content>{children}</Content>
            <div /> {/* Spacer */}
          </Container>
          <Footer />
        </Stack>
      </>
    </MDXProvider>
  </ThemeProvider>
)
