import React from 'react';
import Link from 'gatsby-link';

export default () =>
  <header style={{ marginBottom: '1.5rem'}}>
    <Link to="/">
      <h4 style={{ display: 'inline' }}>J. Mulholland</h4>
    </Link>
    <ul style={{ listStyle: 'none', float: 'right' }}>
      <ListLink to="/blog">Blog</ListLink>
      <ListLink to="/projects">Projects</ListLink>
    </ul>
  </header>

const ListLink = props =>
  <li style={{ display: 'inline-block', marginRight: '1rem' }}>
    <Link to={props.to}>{props.children}</Link>
  </li>