import React, { useEffect, useState } from 'react'
import { graphql } from 'gatsby'
import debounce from 'lodash.debounce'
import { trackCustomEvent } from 'gatsby-plugin-google-analytics'
import { Detail, Layout, TextColumn } from '../components'
import { readingTime } from '../utils'
import { MDXRenderer } from 'gatsby-plugin-mdx'

/**
 * Returns amount of page scrolled as a percentage
 */
function useScroll() {
  const calcPctComplete = () => {
    if (typeof window === 'undefined') return 0
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight
    return (winScroll / height) * 100
  }

  const [pctComplete, setPctComplete] = useState(calcPctComplete())

  useEffect(() => {
    const listener = debounce(
      () => setPctComplete(calcPctComplete()),
      100
    )
    window.addEventListener('scroll', listener)
    return () => window.removeEventListener('scroll', listener)
  }, [setPctComplete, calcPctComplete])

  return pctComplete
}

const FrontMatter = ({ numWords, date }) => (
  <div>
    <Detail>{`${date} • ${readingTime(numWords)}`}</Detail>
  </div>
)

const BlogPost = ({ data }) => {
  const { mdx } = data
  const { frontmatter, body, wordCount } = mdx
  const { title, date } = frontmatter

  // Track read to end
  const pctComplete = useScroll()
  useEffect(() => {
    if (pctComplete > 92) {
      trackCustomEvent({
        category: 'Blog Post',
        action: 'Read to end',
        label: title,
      })
    }
  }, [pctComplete])

  return (
    <Layout pageName='Blog'>
      <TextColumn>
        <h1>{title}</h1>
        <FrontMatter date={date} numWords={wordCount.words} />
        <MDXRenderer>{body}</MDXRenderer>
      </TextColumn>
    </Layout>
  )
}

export const query = graphql`
  query ($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        date
      }
      wordCount {
        words
      }
    }
  }
`

export default BlogPost
