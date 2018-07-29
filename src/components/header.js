import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

export default () =>
  <StyledHeader>
    <StyledLink to="/">
      <SiteName>James Mulholland</SiteName>
    </StyledLink>
    <StyledUl>
      <ListLink to="/blog">Blog</ListLink>
      <ListLink to="/projects">Projects</ListLink>
    </StyledUl>
  </StyledHeader>

const ListLink = props =>
  <StyledLi>
    <StyledLink
      to={props.to}
      style={{ textDecoration: 'none' }}
      activeStyle={{ textDecoration: 'none' }}>
      {props.children}
    </StyledLink>
  </StyledLi>


// styled components

const StyledLi = styled.li`
  display: inline-block;
  margin-left: 1rem;
  margin-bottom: 0.5rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;

  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }

  &:focus, &:hover, &:active {
    color: #dd9801;
  }
`;

const StyledUl = styled.ul`
  listStyle: none;
  margin: 0;
`;

const SiteName = styled.h4`
  display: inline;
`;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding-bottom: 0;
  margin-bottom: 2rem;
  border-bottom: 2px solid #DD9801;
`;
