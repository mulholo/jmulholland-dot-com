import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/Layout'
import Card from '../components/Card'
import CardsContainer from '../components/styles/CardsContainer'
import { format } from 'date-fns'

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

const Index = ({ data, location }) => (
  <Layout pathname={location.pathname}>
    <StyledP>
      I'm James, a front-end engineer from the UK. I currently work at{' '}
      <a href='https://www.memrise.com/'>Memrise</a>
      &nbsp; where I spend most of my time making things with React.
    </StyledP>
    <BlogCardsContainer>
      <h4>Blog Posts</h4>
      <CardsContainer>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Card
            key={node.fields.slug}
            link={node.fields.slug}
            title={node.frontmatter.title}
            content={node.excerpt}
            detail={format(
              new Date(node.frontmatter.date),
              'do MMM yyyy'
            )}
            fullWidth
          />
        ))}
      </CardsContainer>
    </BlogCardsContainer>
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
