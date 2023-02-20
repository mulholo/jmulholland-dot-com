import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { TextContainer, Layout } from '../components'

const Page = ({ data }) => {
  const { mdx } = data
  const { frontmatter, body } = mdx
  const { title } = frontmatter
  return (
    <Layout pageName={title}>
      <TextContainer>
        <MDXRenderer>{body}</MDXRenderer>
      </TextContainer>
    </Layout>
  )
}

export const query = graphql`
  query pageQuery($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      body
    }
  }
`

export default Page
