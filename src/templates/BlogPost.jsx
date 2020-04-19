import React from 'react'
import { graphql } from 'gatsby'
import { Layout, Header, Stack, TextColumn } from '../components'
import { readingTime } from '../utils'

const BlogPost = ({ data }) => {
  if (!data) return null
  const { frontmatter, html, wordCount } = data.markdownRemark
  const { title } = frontmatter
  return (
    <Layout>
      <Stack>
        <Header pageName='Blog' />
        <TextColumn>
          <h1>{title}</h1>
          <span>{readingTime(wordCount.words)}</span>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </TextColumn>
      </Stack>
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
