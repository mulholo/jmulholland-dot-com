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
    <div>
      <h1>Heading 1</h1>
      <p>
        I'm James, a front-end engineer from the UK. I currently work
        at{' '}
        <StyledA color='#70a0dc' href='https://www.peoplegoal.com/'>
          Evermind Digital
        </StyledA>
        &nbsp; where I spend most of my time making things with React.
        I also run a newsletter called&nbsp;
        <StyledA href='https://copythat.io'>Copy That!</StyledA> which
        you should check out if you want to get better at HTML, CSS
        and JS.
      </p>
      <h2>Heading 2</h2>
      Lorem ispsum sed dolor et congratulum bord renungo et ambulam
      wondo in her horto
      <h3>Heading 3</h3>
      <p>
        I'm James, a front-end engineer from the UK. I currently work
        at{' '}
        <StyledA color='#70a0dc' href='https://www.peoplegoal.com/'>
          Evermind Digital
        </StyledA>
        &nbsp; where I spend most of my time making things with React.
        I also run a newsletter called&nbsp;
        <StyledA href='https://copythat.io'>Copy That!</StyledA> which
        you should check out if you want to get better at HTML, CSS
        and JS.
      </p>
      <h4>Heading 4</h4>
      <p>
        I'm James, a front-end engineer from the UK. I currently work
        at{' '}
        <StyledA color='#70a0dc' href='https://www.peoplegoal.com/'>
          Evermind Digital
        </StyledA>
        &nbsp; where I spend most of my time making things with React.
        I also run a newsletter called&nbsp;
        <StyledA href='https://copythat.io'>Copy That!</StyledA> which
        you should check out if you want to get better at HTML, CSS
        and JS.
      </p>
      <h5>Heading 5</h5>
      <p>
        I'm James, a front-end engineer from the UK. I currently work
        at{' '}
        <StyledA color='#70a0dc' href='https://www.peoplegoal.com/'>
          Evermind Digital
        </StyledA>
        &nbsp; where I spend most of my time making things with React.
        I also run a newsletter called&nbsp;
        <StyledA href='https://copythat.io'>Copy That!</StyledA> which
        you should check out if you want to get better at HTML, CSS
        and JS.
      </p>
      <blockquote>Man is the measure of all things</blockquote>
      <h6>Heading 6</h6>
    </div>
  </Layout>
)

const StyledBody = styled.p``

const StyledA = styled.a``

export default Index
