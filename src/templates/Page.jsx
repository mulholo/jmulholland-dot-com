import React from 'react'
import { graphql } from 'gatsby'
import { TextColumn, Layout, Header, Stack } from '../components'

const Page = ({ data }) => {
  if (!data) return null
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const { title } = frontmatter
  return (
    <Layout>
      <Stack>
        <Header pageName={title} />
        <TextColumn>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </TextColumn>
      </Stack>
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
