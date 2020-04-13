import React from 'react'
import { graphql, Link } from 'gatsby'
import { format } from 'date-fns'
import Header from '../components/Header'
import { H4, Detail } from '../components/typography'
import Layout from '../components/Layout'
import Stack from '../components/layout/Stack'
import Grid from '../components/layout/Grid'
import Box from '../components/layout/Box'
import Spacer from '../components/layout/Spacer'

const BlogCard = ({
  /**
   * Internal page to link to
   */
  link,
  title,
  date,
}) => (
  <Link to={link}>
    <Box
      px={4}
      py={4}
      bg='n900'
      display='flex'
      flexDirection='column'
    >
      <H4 fontSize={4}>{title}</H4>
      <Spacer height={3} />
      <Detail>{date}</Detail>
    </Box>
  </Link>
)

const Blog = ({ data }) => {
  return (
    <Layout>
      <Stack minHeight='100vh'>
        <Header pageName='Blog' />
        <Grid
          gridTemplateColumns={['1fr', '1fr 1fr']}
          gridGap={1}
          height='100%'
          bg='n200'
          borderY={1}
        >
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <BlogCard
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
