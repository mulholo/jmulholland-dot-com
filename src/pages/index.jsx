import React from 'react'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'
import {
  Box,
  Grid,
  Layout,
  NewsletterSignUp,
  Stack,
  TextContainer,
} from '../components'

const WrapperLink = styled(Link)(
  ({ theme }) => css`
    display: flex;
    align-items: stretch;
    border: none;
    flex-direction: column;
    flex: 1;
    & div {
      transition: box-shadow 0.2s;
    }
    & h4 {
      transition: color 0.2s;
    }
    &:focus,
    &:active {
      outline: none;
      text-decoration: none;
    }
    &:focus ${Box}, &:hover ${Box} {
      /* prettier-ignore */
      box-shadow: inset 0px 0px 0px ${theme.sizes['s-1']} ${theme
        .colors.b500};
    }
    &:focus h2,
    &:hover h2 {
      color: ${theme.colors.b400};
    }
  `
)

const Option = ({ title, children, link }) => {
  const contents = (
    <Box>
      <TextContainer recursive={false}>
        <h2>{title}</h2>
        {children}
      </TextContainer>
    </Box>
  )
  const Wrapper = link
    ? (props) => <WrapperLink to={link} {...props} />
    : (props) => <>{props.children}</>
  return (
    <Stack alignItems='stretch'>
      <Wrapper>{contents}</Wrapper>
    </Stack>
  )
}

const Start = () => {
  return (
    <Layout pageName='Home'>
      <Grid outline={true}>
        <Option title='About'>
          <p>
            {`I'm James, a London based  `}
            <a href='https://www.memrise.com/'>
              software engineer
            </a>{' '}
            thinking hard about the future.
          </p>
          <p>
            This site is where I explore new ideas and share what I've
            learned so far. I'm particularly interested in effective
            engineering, producing better technology products, and
            exploring the next wave of computing paradigms,
            particularly AI. You can peak inside my brain on the{' '}
            <Link to='thoughts'>{`thoughts`}</Link> page or see a list
            of <Link to='projects'>projects I've worked on</Link>.
          </p>
          <p>
            I've found this blog to be a great vehicle for meeting
            interesting people. If there's anything here you find
            interesting, please{' '}
            <a href='https://twitter.com/mulholio'>DM</a>/
            <a href='mailto:james@jmulholland.com'>email</a> me or
            let's go for coffee if you're in London.
          </p>
        </Option>
        <Option title='➔ Blog' link='/blog'>
          <p>Longer form writing</p>
        </Option>
        <Option title='➔ Notes' link='/notes'>
          <p>Work in progress notes</p>
        </Option>
        <Option title='Other'>
          <ul>
            <li>
              <Link to='/thoughts'>Thoughts</Link> - High-level
              summary of my beliefs and interests.
            </li>
            <li>
              <Link to='/projects'>Projects</Link> - Things I have
              worked on.
            </li>
            <li>
              <Link to='/uses'>Uses</Link> - A list of tools and apps
              I use.
            </li>
          </ul>
        </Option>
      </Grid>
      <NewsletterSignUp />
    </Layout>
  )
}

export default Start
