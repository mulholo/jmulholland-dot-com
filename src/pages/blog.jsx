import React from 'react'
import { graphql, Link } from 'gatsby'
import { format } from 'date-fns'
import {
  Box,
  Detail,
  Grid,
  Header,
  Layout,
  Spacer,
  Stack,
} from '../components'

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
    `}
  >
    <Box>
      <Stack>
        <h4
          css={`
            margin: 0;
          `}
        >
          {title}
        </h4>
        <Spacer height={3} />
        <Detail>{date}</Detail>
      </Stack>
    </Box>
  </Link>
)

const Blog = ({ data }) => {
  return (
    <Layout>
      <Stack>
        <Header pageName='Blog' />
        <Grid>
          {data.allMarkdownRemark.edges.map(({ node }) => (
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
      </Stack>
    </Layout>
  )
}

export const query = graphql`
  query blogQuery {
    allMarkdownRemark(
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
