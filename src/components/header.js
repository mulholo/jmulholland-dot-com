import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

export default () =>
  <StyledHeader>
    <Link to="/">
      <SiteName>J. Mulholland</SiteName>
    </Link>
    <StyledUl>
      <ListLink to="/blog">Blog</ListLink>
      <ListLink to="/projects">Projects</ListLink>
    </StyledUl>
  </StyledHeader>

const ListLink = props =>
  <StyledLink>
    <Link to={props.to}>{props.children}</Link>
  </StyledLink>


// styled components

const StyledLink = styled.li`
  display: inline-block;
  margin-right: 1rem;
`;

const StyledUl = styled.ul`
  listStyle: none;
  float: right:
`;

const SiteName = styled.h4`
  display: inline;
`;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
`;
