import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Card from '../components/Card'
import { format } from 'date-fns'
import CardsContainer from '../components/styles/CardsContainer'

export interface BlogPostEdge {
  node: {
    frontmatter: {
      title: string
      date: string
    }
    fields: {
      slug: string
    }
    excerpt: string
    wordCount: {
      words: number
    }
  }
}

interface BlogPageProps extends GatsbyPageProps {
  data: {
    allMarkdownRemark: {
      edges: BlogPostEdge[]
    }
  }
}

const BlogPage = ({ data, location }: BlogPageProps) => (
  <Layout pathname={location.pathname}>
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
          trimLength={0}
        />
      ))}
    </CardsContainer>
  </Layout>
)

export const query = graphql`
  query blogQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            date
          }
          fields {
            slug
          }
          excerpt(format: PLAIN)
          wordCount {
            words
          }
        }
      }
    }
  }
`

export default BlogPage
