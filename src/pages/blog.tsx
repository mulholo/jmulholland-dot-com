import * as React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/Layout'

const StyledList = styled.ul`
  margin: 0;

  a {
    text-decoration: none;
    color: black;
  }

  li {
    list-style: none;
    margin-left: 0;
  }
`

const BlogPage = ({ data, location }) => (
  <Layout pathname={location.pathname}>
    <StyledList>
      {data.allContentfulBlogPost.edges.map(({ node }) => (
        <BlogPost node={node} key={node.slug} />
      ))}
    </StyledList>
  </Layout>
)

const BlogPost = ({ node }) => (
  <Link to={node.slug}>
    <li>
      <h4>{node.title}</h4>
      <div>
        <p>{node.body.childMarkdownRemark.excerpt}</p>
      </div>
    </li>
  </Link>
)

export const query = graphql`
  query blogQuery {
    allContentfulBlogPost(filter: { node_locale: { eq: "en-GB" } }) {
      edges {
        node {
          title
          slug
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
