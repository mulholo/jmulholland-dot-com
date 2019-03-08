import * as React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'

const Index = ({ location }) => (
  <Layout pathname={location.pathname}>
    <StyledBody>
      I'm James, a front-end engineer from the UK. I currently work at{' '}
      <StyledA color='#70a0dc' href='https://www.peoplegoal.com/'>
        Evermind Digital
      </StyledA>
      &nbsp; where I spend most of my time making things with React. I
      also run a newsletter called&nbsp;
      <StyledA href='https://copythat.io'>Copy That!</StyledA> which
      you should check out if you want to get better at HTML, CSS and
      JS.
    </StyledBody>
    <StyledBody>
      Mostly, this is a <StyledA href='/blog'>blog</StyledA> so you
      should head over to that. You can also find me on&nbsp;
      <StyledA href='https://twitter.com/mulholio'>Twitter</StyledA>
      ,&nbsp;
      <StyledA
        color='rgba(0,0,0,0.7)'
        href='https://vsco.com/mulholio'
      >
        VSCO
      </StyledA>
      ,&nbsp;
      <StyledA href='https://github.com/mulholio'>Github</StyledA> or
      good, old-fashioned&nbsp;
      <StyledA href='mailto:james@jmulholland.com'>email</StyledA>.
    </StyledBody>
  </Layout>
)

const StyledBody = styled.p``

const StyledA = styled.a``

export default Index
