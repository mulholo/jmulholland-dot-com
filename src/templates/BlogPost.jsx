import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import debounce from 'lodash.debounce'
import { RATIO, track } from '../utils'
import { Detail, Layout, TextContainer } from '../components'

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

const Header = styled.header`
  margin-bottom: ${({ theme }) => theme.sizes.s2};
  width: ${(1 / RATIO) * 100}%;
`

const Title = styled.h1`
  margin-bottom: ${({ theme }) => theme.sizes.s0};
`

const FrontMatter = ({ numWords, date }) => (
  <Detail>{`${date} • ${numWords} words`}</Detail>
)

const BlogPost = ({ data }) => {
  const { mdx } = data
  const { frontmatter, body, wordCount } = mdx
  const { title, date } = frontmatter

  // Track read to end
  const pctComplete = useScroll()
  useEffect(() => {
    if (pctComplete > 92) {
      track('read_to_end', {
        category: 'Blog Post',
        label: title,
      })
    }
  }, [pctComplete])

  return (
    <Layout>
      <Header>
        <Title>{title}</Title>
        <FrontMatter date={date} numWords={wordCount.words} />
      </Header>
      <TextContainer>
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
        date
      }
      wordCount {
        words
      }
    }
  }
`

export default BlogPost
