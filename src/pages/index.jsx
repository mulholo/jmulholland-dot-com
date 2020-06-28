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
      box-shadow: inset 0px 0px 0px ${theme.sizes['s-1']} ${theme.colors.b500};
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
    ? props => <WrapperLink to={link} {...props} />
    : props => <>{props.children}</>
  return (
    <Stack alignItems='stretch'>
      <Wrapper>{contents}</Wrapper>
    </Stack>
  )
}

const NewsletterSignUp = () => (
  <Sidebar flipSides contentMin='61.8%'>
    <form
      action='https://buttondown.email/api/emails/embed-subscribe/mulholio'
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
            I'm a software engineer living in London where I spend
            most of my time building things at{' '}
            <a href='https://www.memrise.com/'>Memrise</a> and&nbsp;
            <a href='https://github.com/mulholio'>
              for other random projects
            </a>
            .
          </p>
          <p>
            Outside of code, I'm into{' '}
            <Link to='/thoughts#philosophy'>philosophy</Link> (my
            previous primary subject matter), systems-thinking,&nbsp;
            <Link to='/thoughts#design'>design,</Link>
            <Link to='/thoughts#meta-learning-and-productivity'>
              {' '}
              personal development
            </Link>{' '}
            and the future. If you're interested in finding out more
            about me then head to{' '}
            <Link to='/thoughts'>/thoughts</Link>.
          </p>
          <p>
            I view this blog as a vehicle for meeting interesting
            people so, if there is anything here you find
            interesting,&nbsp;
            <a href='https://twitter.com/mulholio'>DM me</a> or let me
            buy you a coffee if you're in London.
          </p>
        </Option>
        <Option title='Writing' link='/blog' />
        <Option title='Newsletter'>
          <p>
            I write about technology, the future, self-improvement,
            and philosophy. If you would like to join me in exploring
            these topics, sign up here.
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
