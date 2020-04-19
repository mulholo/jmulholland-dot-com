import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'
import { Layout, Box, Stack, Grid, Header } from '../components'

const WrapperButton = styled.button(
  ({ theme }) => css`
    padding: 0;
    border: none;
    cursor: pointer;
    text-align: left;
    display: flex;
    margin: 0;
    align-items: stretch;
    font-size: ${theme.fontSizes[2]};
    flex-direction: column;
    flex: 1;
  `
)

const WrapperLink = styled(Link)`
  display: flex;
  align-items: stretch;
  border: none;
  flex-direction: column;
  flex: 1;
`

const Option = ({ title, children, link }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleOpen = children ? () => setIsOpen(!isOpen) : null
  const contents = (
    <Box>
      <h4
        css={`
          font-size: ${({ theme }) => theme.fontSizes[5]};
          font-weight: 600;
          margin: 0;
        `}
      >
        {title}
      </h4>
      {isOpen && children}
    </Box>
  )
  const Wrapper = link
    ? props => <WrapperLink to={link} {...props} />
    : props => <WrapperButton onClick={toggleOpen} {...props} />
  return (
    <Stack alignItems='stretch'>
      <Wrapper>{contents}</Wrapper>
    </Stack>
  )
}

const EmailForm = styled.form`
  display: flex;
  padding: 0 0 2rem 0;
  width: 100%;
`

const Button = styled.button`
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  padding: ${({ theme }) => `${theme.s2} ${theme.s4}`};
`

const Input = styled.input`
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
  flex-grow: 1;
  padding: ${({ theme }) => `${theme.s2} ${theme.s4}`};
`

const Start = () => {
  return (
    <Layout>
      <Stack>
        <Header pageName='What brings you here?' />
        <Grid>
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
              previous primary subject matter),
              systems-thinking,&nbsp;
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
              <a href='https://twitter.com/mulholio'>DM me</a> or let
              me buy you a coffee if you're in London.
            </p>
          </Option>
          <Option title='Writing' link='/blog' />
          <Option title='Newsletter'>
            <EmailForm
              action='https://buttondown.email/api/emails/embed-subscribe/mulholio'
              method='post'
              target='popupwindow'
              onSubmit={() =>
                window.open(
                  'https://buttondown.email/mulholio',
                  'popupwindow'
                )
              }
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
            </EmailForm>
          </Option>
          <Option title='Other'></Option>
        </Grid>
      </Stack>
    </Layout>
  )
}

export default Start
