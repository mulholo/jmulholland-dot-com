import React from 'react'
import styled from 'styled-components'
import { graphql, Link } from 'gatsby'
import { format } from 'date-fns'
import Layout from '../components/Layout'
import BlogCard from '../components/BlogCard'
import _Button from '../components/styles/Button'
import CardsContainer from '../components/styles/CardsContainer'
import _Input from '../components/styles/Input'
import media from '../utils/media'

const EmailForm = styled.form`
  display: flex;
  padding: 0 0 2rem 0;
  width: 100%;

  ${media.tablet`
    width: 50%;
  `}
`

const Button = styled(_Button)`
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  padding: ${({ theme }) => `${theme.s2} ${theme.s4}`};
`

const Input = styled(_Input)`
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
  flex-grow: 1;
  padding: ${({ theme }) => `${theme.s2} ${theme.s4}`};
`

const Index = ({ data, location }) => (
  <Layout pathname={location.pathname}>
    <p>
      I'm a software engineer living in London where I spend most of
      my time building things at{' '}
      <a href='https://www.memrise.com/'>Memrise</a> and&nbsp;
      <a href='https://github.com/mulholio'>
        for other random projects
      </a>
      .
    </p>
    <p>
      Outside of code, I'm into{' '}
      <Link to='/thoughts#philosophy'>philosophy</Link> (my previous
      primary subject matter), systems-thinking,&nbsp;
      <Link to='/thoughts#design'>design,</Link>
      <Link to='/thoughts#meta-learning-and-productivity'>
        {' '}
        personal development
      </Link>{' '}
      and the future. If you're interested in finding out more about
      me then head to <Link to='/thoughts'>/thoughts</Link>.
    </p>
    <p>
      I view this blog as a vehicle for meeting interesting people so,
      if there is anything here you find interesting,&nbsp;
      <a href='https://twitter.com/mulholio'>DM me</a> or let me buy
      you a coffee if you're in London.
    </p>
    <div>
      <h4>Articles</h4>
      <CardsContainer>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <BlogCard
            key={node.fields.slug}
            link={node.fields.slug}
            title={node.frontmatter.title}
            detail={format(
              new Date(node.frontmatter.date),
              'do MMM yyyy'
            )}
          />
        ))}
      </CardsContainer>
    </div>
    <div>
      <h4>Newsletter</h4>
      <EmailForm
        action='https://buttondown.email/api/emails/embed-subscribe/mulholio'
        method='post'
        target='popupwindow'
        onSubmit="window.open('https://buttondown.email/mulholio', 'popupwindow')"
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
    </div>
  </Layout>
)

export const query = graphql`
  query recentBlogQuery {
    allMarkdownRemark(
      filter: { frontmatter: { type: { ne: "page" } } }
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      edges {
        node {
          frontmatter {
            title
            date
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

export default Index
