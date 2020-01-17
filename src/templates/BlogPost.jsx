import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import readingTime from '../utils/readingTime'

const BlogPost = ({ data, location }) => {
  if (!data) return null
  const { frontmatter, html, wordCount } = data.markdownRemark
  const { title } = frontmatter
  return (
    <Layout pathname={location.pathname}>
      <h1>{title}</h1>
      <p>
        <em>{readingTime(wordCount.words)}</em>
      </p>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
      wordCount {
        words
      }
    }
  }
`

export default BlogPost
