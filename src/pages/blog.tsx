import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Card from '../components/Card'
import { format } from 'date-fns'
import CardsContainer from '../components/styles/CardsContainer'

const BlogPage = ({ data, location }) => (
  <Layout pathname={location.pathname}>
    <CardsContainer>
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
    </CardsContainer>
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
