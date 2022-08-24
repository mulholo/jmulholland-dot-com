import React from 'react'
import { graphql } from 'gatsby'
import { Detail, Layout, TextContainer } from '../components'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const FrontMatter = ({ lastUpdated }) => (
  <Detail>{`Last updated: ${lastUpdated}`}</Detail>
)

const BlogPost = ({ data }) => {
  const { mdx } = data
  const { frontmatter, body } = mdx
  const { title, lastUpdated } = frontmatter

  return (
    <Layout pageName='Notes'>
      <TextContainer>
        <h1>{title}</h1>
        <FrontMatter lastUpdated={lastUpdated} />
        <MDXRenderer>{body}</MDXRenderer>
      </TextContainer>
    </Layout>
  )
}

export const query = graphql`
  query ($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        lastUpdated
      }
    }
  }
`

export default BlogPost
