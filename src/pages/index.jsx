import React from 'react'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'
import {
  Box,
  Button,
  Grid,
  Input,
  Layout,
  Sidebar,
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

const optionTitleCss = css`
  font-weight: 600;
  margin: 0;
  font-size: ${({ theme, big }) =>
    big ? theme.fontSizes.s3 : theme.fontSizes.s2};
`

const Option = ({ title, children, link }) => {
  const contents = (
    <Box>
      <TextContainer recursive={false}>
        <h2
          big={typeof children === 'undefined'}
          css={optionTitleCss}
        >
          {title}
        </h2>
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

const NewsletterSignUp = () => (
  <Sidebar flipSides contentMin='61.8%'>
    <form
      action='https://buttondown.email/api/emails/embed-subscribe/explore-exploit'
      method='post'
      target='popupwindow'
      onSubmit={() =>
        window.open(
          'https://buttondown.email/mulholio',
          'popupwindow'
        )
      }
      // className needed for email signup (non-styling)
      className='embeddable-buttondown-form'
    >
      <Input
        type='email'
        name='email'
        id='bd-email'
        placeholder='email@address.com'
      ></Input>
      <input type='hidden' value='1' name='embed'></input>
      <Button type='submit' value='Subscribe'>
        Subscribe
      </Button>
    </form>
  </Sidebar>
)

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
        <Option title='➔ Writing' link='/blog' />
        <Option title='Newsletter'>
          <p>
            I run the Explore-Exploit newsletter where I write about
            being a better engineer and play with future ideas in
            technology. Sign up below.
          </p>
          <NewsletterSignUp />
        </Option>
        <Option title='Other'>
          <ul>
            <li>
              <Link to='/thoughts'>Thoughts</Link> - My thoughts,
              articulated.
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
    </Layout>
  )
}

export default Start
