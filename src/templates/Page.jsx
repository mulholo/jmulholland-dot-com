import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

const Page = ({ data, location }) => {
  if (!data) return null
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout pathname={location.pathname}>
      <h1>{frontmatter.title}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: html,
        }}
      />
    </Layout>
  )
}

export const query = graphql`
  query pageQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      html
    }
  }
`

export default Page
