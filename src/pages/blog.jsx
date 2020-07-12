import React from 'react'
import { graphql, Link } from 'gatsby'
import { format } from 'date-fns'
import { Box, Detail, Grid, Layout, Stack } from '../components'
import { media } from '../utils'

const BlogBox = ({
  /**
   * Internal page to link to
   */
  link,
  title,
  date,
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
      <Stack spacer={'s-1'}>
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
        <Detail>{date}</Detail>
      </Stack>
    </Box>
  </Link>
)

const Blog = ({ data }) => (
  <Layout pageName='Blog'>
    <Grid>
      {data.allMdx.edges.map(({ node }) => (
        <BlogBox
          key={node.fields.slug}
          link={node.fields.slug}
          title={node.frontmatter.title}
          date={format(
            new Date(node.frontmatter.date),
            'do MMM yyyy'
          )}
        />
      ))}
    </Grid>
  </Layout>
)

export const query = graphql`
  query blogQuery {
    allMdx(
      filter: { frontmatter: { type: { ne: "page" } } }
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      edges {
        node {
          frontmatter {
            title
            date
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

export default Blog
