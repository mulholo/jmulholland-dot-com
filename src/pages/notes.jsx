import React from 'react'
import { graphql, Link } from 'gatsby'
import {
  Box,
  Stack,
  Disclosure,
  TextContainer,
  Layout,
} from '../components'
import { media } from '../utils'

// TODO remove
const repeat = (arr) => {
  let newArr = []
  for (let i = 0; i < 20; i++) {
    newArr = newArr.concat(arr)
  }
  return newArr
}

const Notes = ({ data }) => (
  <Layout pageName='Notes'>
    <Stack>
      <WhatIsThisPage />
      {repeat(data.notes.edges).map(({ node }) => (
        <NoteRow
          key={node.fields.slug}
          link={node.fields.slug}
          title={node.frontmatter.title}
          tags={node.frontmatter.tags}
        />
      ))}
    </Stack>
  </Layout>
)

const WhatIsThisPage = () => {
  return (
    <Box borderY>
      <TextContainer>
        <Disclosure
          title={({ icon }) => <h4>{icon} What is this page?</h4>}
        >
          <>
            <p>This page contains my notes for learning in public.</p>
            <p>
              It can be thought of as a{' '}
              <a href='https://joelhooks.com/digital-garden'>
                Digital Garden
              </a>
              : fast, evolving, messy, tangled. Expect book reviews,
              tips and tricks, notes on understanding computers, and
              my mental models.
            </p>
            <p>
              For more polished pieces, please head to{' '}
              <Link to='/blog'>/blog</Link>.
            </p>
          </>
        </Disclosure>
      </TextContainer>
    </Box>
  )
}

const NoteRow = ({
  /**
   * Internal page to link to
   */
  link,
  title,
  tags,
}) => (
  <Link
    to={link}
    css={`
      display: flex;
      flex-direction: column;
      ${Box} {
        transition: box-shadow 0.2s;
      }
      &:focus,
      &:active {
        outline: none;
        text-decoration: none;
      }
      &:focus ${Box}, &:hover ${Box} {
        box-shadow: inset 0px 0px 0px 8px
          ${({ theme }) => theme.colors.b500};
      }
      &:focus h4,
      &:hover h4 {
        color: ${({ theme }) => theme.colors.b400};
      }
    `}
  >
    <Box borderY>
      <div
        css={`
          display: flex;
          align-items: baseline;
          & > :first-child {
            margin-right: auto;
          }
        `}
      >
        <h4
          css={`
            margin: 0;
            font-size: ${({ theme }) => theme.fontSizes.s0};
            ${media.tablet`
              font-size: ${({ theme }) => theme.fontSizes.s1};
            `}
          `}
        >
          {title}
        </h4>
        <p>
          {tags.map((tag, i) => (
            <>
              <span key={tag}>{tag}</span>
              {i !== tags.length - 1 && ', '}
            </>
          ))}
        </p>
      </div>
    </Box>
  </Link>
)

export const query = graphql`
  query notesQuery {
    notes: allMdx(
      filter: { fileAbsolutePath: { regex: "/content/notes/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            tags
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default Notes
