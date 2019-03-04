import React from 'react'
import PropTypes from 'prop-types'
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

BlogPage.propTypes = {
  data: PropTypes.shape({
    edge: PropTypes.shape({
      node: PropTypes.shape({
        title: PropTypes.string,
        slug: PropTypes.string,
        body: PropTypes.shape({
          childMarkDownRemark: PropTypes.shape({
            excerpt: PropTypes.string,
          }),
        }),
      }),
    }),
  }).isRequired,
}

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

BlogPost.propTypes = {
  node: PropTypes.shape({
    slug: PropTypes.string,
    body: PropTypes.shape({
      childMarkdownRemark: PropTypes.shape({
        excerpt: PropTypes.string,
      }),
    }),
  }).isRequired,
}

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
