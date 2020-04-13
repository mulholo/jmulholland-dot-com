import React, { useState } from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import Box from '../components/layout/Box'
import Stack from '../components/layout/Stack'
import Grid from '../components/layout/Grid'
import Header from '../components/Header'
import { H4 } from '../components/typography'
import styled from 'styled-components'
import { typography } from 'styled-system'

const TitleRow = styled.div({
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
})

const CloseButton = styled.span({
  children: 'X',
  fontWeight: 'bold',
  fontSize: 5,
  marginLeft: 'auto',
})

const WrapperButton = styled.button(
  {
    padding: 0,
    height: '100%',
    border: 'none',
    textAlign: 'left',
    cursor: 'pointer',
  },
  typography
)
WrapperButton.defaultProps = {
  fontSize: 2,
}

const Option = ({ title, children, link }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleOpen = children ? () => setIsOpen(!isOpen) : null
  const contents = (
    <Box
      px={6}
      py={4}
      bg='n900'
      height='100%'
      css={{ cursor: 'pointer' }}
    >
      <TitleRow onClick={toggleOpen} disabled={link}>
        <H4 fontSize={5} display='inline'>
          {title}
        </H4>
        {isOpen && <CloseButton />}
      </TitleRow>
      {isOpen && children}
    </Box>
  )
  const Wrapper = link
    ? props => <Link to={link} {...props} />
    : props => <WrapperButton onClick={toggleOpen} {...props} />
  return <Wrapper>{contents}</Wrapper>
}

const EmailForm = styled.form({
  display: 'flex',
  padding: '0 0 2rem 0',
  width: '100%',
})

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
      <Stack height='100vh' minHeight='100vh'>
        <Header pageName='What brings you here?' />
        <Grid
          gridTemplateColumns={['1fr', '1fr 1fr']}
          gridTemplateRows={['1fr 1fr 1fr 1fr', '1fr 1fr']}
          gridGap={1}
          height='100%'
          bg='n200'
        >
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
        <Box flexGrow='1' bg='n200' />
      </Stack>
    </Layout>
  )
}

export default Start
