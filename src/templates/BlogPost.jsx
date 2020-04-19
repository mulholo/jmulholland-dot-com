import React from 'react'
import { graphql } from 'gatsby'
import { Layout, Header, Stack, Spacer } from '../components'
import { media, readingTime } from '../utils'

const BlogPost = ({ data }) => {
  if (!data) return null
  const { frontmatter, html, wordCount } = data.markdownRemark
  const { title } = frontmatter
  return (
    <Layout>
      <Stack>
        <Header pageName='Blog' />
        <div
          css={`
            display: grid;
            grid-template-columns: 2rem 1fr 2rem;
            ${media.tablet`
              grid-template-columns: minMax(2rem, 1fr) 40rem minMax(2rem, 1fr);
            `}
            ${media.desktop`
              grid-template-columns: 2fr 40rem 3fr;
            `}
            };
          `}
        >
          <Spacer />
          <Stack>
            <h1>{title}</h1>
            <span>{readingTime(wordCount.words)}</span>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </Stack>
          <Spacer />
        </div>
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
