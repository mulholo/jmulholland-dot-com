import React from 'react'
import { graphql } from 'gatsby'
import { Detail, Layout, TextColumn } from '../components'
import { readingTime } from '../utils'

const BlogPost = ({ data }) => {
  if (!data) return null
  const { frontmatter, html, wordCount } = data.markdownRemark
  const { title } = frontmatter
  return (
    <Layout pageName='Blog'>
      <TextColumn>
        <h1>{title}</h1>
        <Detail>{readingTime(wordCount.words)}</Detail>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </TextColumn>
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
