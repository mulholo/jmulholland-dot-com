import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';

// TODO: Move into a theme! (17/02/2019 - 13:01 @jamesmulholland)
const twitterBlue = '#45a1eb';
const braunYellow = '#DD9801';
const githubGreen = '#337203';
const copyThatPurple = '#535ec8';

export default ({ location }) => (
  <Layout pathname={location.pathname}>
    <StyledBody>
      I'm James, a front-end developer from the UK. I currently work
      at
      {' '}
      <StyledA color='#70a0dc' href='https://www.peoplegoal.com/'>
        Evermind Digital
      </StyledA>
      &nbsp; where I spend most of my time making things with React. I
      also run a newsletter called&nbsp;
      <StyledA color={copyThatPurple} href='https://copythat.io'>
        Copy That!
      </StyledA>
      {' '}
      which you should check out if you want to get better at HTML,
      CSS and JS.
    </StyledBody>
    <StyledBody>
      Mostly, this is a
      {' '}
      <StyledA href='/blog'>blog</StyledA>
      {' '}
so you
      should head over to that. You can also find me on&nbsp;
      <StyledA
        color={twitterBlue}
        href='https://twitter.com/mulholio'
      >
        Twitter
      </StyledA>
      ,&nbsp;
      <StyledA
        color='rgba(0,0,0,0.7)'
        href='https://vsco.com/mulholio'
      >
        VSCO
      </StyledA>
      ,&nbsp;
      <StyledA color={githubGreen} href='https://github.com/mulholio'>
        Github
      </StyledA>
      {' '}
      or good, old-fashioned&nbsp;
      <StyledA
        color={braunYellow}
        href='mailto:james@jmulholland.com'
      >
        email
      </StyledA>
      .
    </StyledBody>
  </Layout>
);

const StyledBody = styled.p`
  font-size: 2.25rem;
  font-weight: 600;
`;

const StyledA = styled.a`
  font-weight: 600;
  color: #000;

  &:hover {
    color: ${props => props.color || braunYellow};
  }
`;
