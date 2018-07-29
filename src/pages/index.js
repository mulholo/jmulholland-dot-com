import React from "react";
import styled from 'styled-components';

export default () =>
  <div>
    <SplashText>
      I'm James, a front-end developer from the U.K.
    </SplashText>
    <p>
      Mostly, this is a blog so you should head over to that. You can also find me on
      <StyledLink color={twitterBlue} href="https://twitter.com/mulholio">Twitter</StyledLink>,
      <StyledLink href="https://vsco.com/mulholio">VSCO</StyledLink>, 
      <StyledLink color={githubGreen} href="https://github.com/mulholio">Github</StyledLink> or good, old-fashioned
      <StyledLink color={braunYellow} href="mailto:james@jmulholland.com">email</StyledLink>.
    </p>
  </div>


const SplashText = styled.h2`
  font-size: 2rem;
`

const StyledLink = styled.a`
  font-weight: 600;
  text-decoration: none;
  color: ${props => props.color || '#000'}
`

const twitterBlue = '#45a1eb';
const braunYellow = '#DD9801';
const githubGreen = '#337203';
