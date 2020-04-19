import React from 'react'
import { graphql } from 'gatsby'
import { Layout, Header, Stack, Spacer, Grid } from '../components'

const Page = ({ data }) => {
  if (!data) return null
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const { title } = frontmatter
  return (
    <Layout>
      <Stack>
        <Header pageName={title} />
        <Grid
          display='grid'
          gridTemplateColumns={[
            '2rem 1fr 2rem',
            'minMax(2rem, 1fr) 40rem minMax(2rem, 1fr)',
            '2fr 40rem 3fr',
          ]}
        >
          <Spacer />
          <Stack>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </Stack>
          <Spacer />
        </Grid>
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
