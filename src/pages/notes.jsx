import React from 'react'
import { graphql, Link } from 'gatsby'
import { Box, Stack, Layout } from '../components'
import { media } from '../utils'

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

const Notes = ({ data }) => (
  <Layout pageName='Notes'>
    <Stack>
      {data.notes.edges.map(({ node }) => (
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
