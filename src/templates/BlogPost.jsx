import React from 'react'
import { graphql } from 'gatsby'
import {
  Detail,
  Grid,
  Layout,
  Header,
  Stack,
  Spacer,
} from '../components'
import readingTime from '../utils/readingTime'

const BlogPost = ({ data }) => {
  if (!data) return null
  const { frontmatter, html, wordCount } = data.markdownRemark
  const { title } = frontmatter
  return (
    <Layout>
      <Stack>
        <Header pageName='Blog' />
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
            <h1>{title}</h1>
            <Detail>{readingTime(wordCount.words)}</Detail>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </Stack>
          <Spacer />
        </Grid>
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
