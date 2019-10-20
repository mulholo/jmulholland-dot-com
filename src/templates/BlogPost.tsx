import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import readingTime from '../utils/readingTime'

interface BlogPostProps {
  data: {
    contentfulBlogPost: {
      title: string
      slug: string
      body: {
        childMarkdownRemark: {
          html: string
          wordCount: {
            words: number
          }
        }
      }
    }
  }
  location: {
    pathname: string
  }
}

const BlogPost = ({ data, location }: BlogPostProps) => {
  if (!data) return null
  const { title, body } = data.contentfulBlogPost
  const { childMarkdownRemark } = body
  const { html, wordCount } = childMarkdownRemark
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
  query blogPostQuery($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      slug
      body {
        childMarkdownRemark {
          html
          wordCount {
            words
          }
        }
      }
    }
  }
`

export default BlogPost
