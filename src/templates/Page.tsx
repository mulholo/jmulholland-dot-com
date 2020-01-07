import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

interface PageProps {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string
      }
      html: string
    }
  }
  location: {
    pathname: string
  }
}

const Page = ({ data, location }: PageProps) => {
  if (!data) return null
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout pathname={location.pathname}>
      <h1>{frontmatter.title}</h1>
      <div
        eslint-disable-next-line
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
