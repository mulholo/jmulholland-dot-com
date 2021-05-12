import React from 'react'
import { graphql, Link } from 'gatsby'
import { Box, Grid, Layout } from '../components'
import { media } from '../utils'

const NoteBox = ({
  /**
   * Internal page to link to
   */
  link,
  title,
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
    <Box>
      <h4
        css={`
          margin: 0;
          font-size: ${({ theme }) => theme.fontSizes.s1};
          ${media.tablet`
              font-size: ${({ theme }) => theme.fontSizes.s2};
            `}
        `}
      >
        {title}
      </h4>
    </Box>
  </Link>
)

const Blog = ({ data }) => (
  <Layout pageName='Notes'>
    <Grid>
      {data.notes.edges.map(({ node }) => (
        <NoteBox
          key={node.fields.slug}
          link={node.fields.slug}
          title={node.frontmatter.title}
        />
      ))}
    </Grid>
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
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default Blog
