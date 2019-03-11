import * as React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/Layout'
import Card from '../components/Card'
import { format } from 'date-fns'

const StyledList = styled.ul`
  padding: 0;
`

const BlogPage = ({ data, location }) => (
  <Layout pathname={location.pathname}>
    <StyledList>
      {data.allContentfulBlogPost.edges.map(({ node }) => (
        <Card
          key={node.slug}
          link={node.slug}
          title={node.title}
          content={node.body.childMarkdownRemark.excerpt}
          detail={format(new Date(node.publishDate), 'Do MMM YYYY')}
          fullWidth
          trimLength={0}
        />
      ))}
    </StyledList>
  </Layout>
)

export const query = graphql`
  query blogQuery {
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

export default BlogPage
