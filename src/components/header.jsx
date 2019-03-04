import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Header = () => (
  <StyledHeader>
    <StyledLink to='/'>
      <SiteName>James Mulholland</SiteName>
    </StyledLink>
    <StyledUl>
      <ListLink to='/'>Home</ListLink>
      <ListLink to='/blog'>Blog</ListLink>
      <ListLink to='/thoughts'>Thoughts</ListLink>
    </StyledUl>
  </StyledHeader>
)

const ListLink = ({ to, children }) => (
  <StyledLi>
    <StyledLink
      to={to}
      style={{ textDecoration: 'none' }}
      activeStyle={{ textDecoration: 'none' }}
    >
      {children}
    </StyledLink>
  </StyledLi>
)

ListLink.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  to: PropTypes.string.isRequired,
}

// styled components

const StyledLi = styled.li`
  display: inline-block;
  margin-left: 1rem;
  margin-bottom: 0.5rem;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }

  &:focus,
  &:hover,
  &:active {
    color: #dd9801;
  }
`

const StyledUl = styled.ul`
  liststyle: none;
  margin: 0;
`

const SiteName = styled.h4`
  display: inline;
`

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding-bottom: 0;
  margin-bottom: 2rem;
  border-bottom: 2px solid #dd9801;
`

export default Header
