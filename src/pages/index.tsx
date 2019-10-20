import * as React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/Layout'
import Card from '../components/Card'
import CardsContainer from '../components/styles/CardsContainer'
import { format } from 'date-fns'
import { BlogPostEdge } from './blog'

const BlogCardsContainer = styled.div`
  .readMore {
    font-weight: ${props => props.theme.semiBold};
    color: ${props => props.theme.n300};
    margin-top: ${props => props.theme.s4};
  }

  .readMore:hover {
    color: ${props => props.theme.n400};
  }
`

const StyledP = styled.p`
  font-size: ${props => props.theme.tMedium};
`

const StyledHeader = styled.h4``

interface IndexProps extends GatsbyPageProps {
  data: {
    allContentfulBlogPost: {
      edges: BlogPostEdge[]
    }
  }
}

const Index = ({ data, location }: IndexProps) => (
  <Layout pathname={location.pathname}>
    <StyledP>
      I'm James, a front-end engineer from the UK. I currently work at{' '}
      <a href='https://www.memrise.com/'>Memrise</a>
      &nbsp; where I spend most of my time making things with React.
    </StyledP>
    <BlogCardsContainer>
      <StyledHeader>Recent Blog Posts</StyledHeader>
      <CardsContainer>
        {data.allContentfulBlogPost.edges.map(({ node }) => (
          <Card
            key={node.slug}
            link={node.slug}
            title={node.title}
            content={node.body.childMarkdownRemark.excerpt}
            detail={format(new Date(node.publishDate), 'Do MMM yyyy')}
            fullWidth
          />
        ))}
      </CardsContainer>
      <Link to='blog'>
        <p className='readMore'>Read More →</p>
      </Link>
    </BlogCardsContainer>
  </Layout>
)

export const query = graphql`
  query recentBlogQuery {
    allContentfulBlogPost(filter: { node_locale: { eq: "en-GB" } }) {
      edges {
        node {
          title
          slug
          publishDate
          body {
            childMarkdownRemark {
              excerpt
            }
          }
        }
      }
    }
  }
`

export default Index
