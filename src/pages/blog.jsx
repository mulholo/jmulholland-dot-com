import React from 'react'
import { graphql, Link } from 'gatsby'
import { format } from 'date-fns'
import { Box, Detail, Layout, Stack } from '../components'

const BlogPost = ({
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
      text-decoration: none;
      &:focus,
      &:active,
      &:hover,
      &:focus h4,
      &:active h4,
      &:hover h4 {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.b400};
      }
    `}
  >
      <Stack spacer='s0'>
      <h4
        css={`
          margin: 0;
          font-size: ${({ theme }) => theme.fontSizes.s0};

          @media (min-width: ${780 / 16}em) {
            font-size: ${({ theme }) => theme.fontSizes.s1};
          }
        `}
      >
        {title}
      </h4>
      <Detail>{date}</Detail>
      </Stack>
  </Link>
)

const Blog = ({ data }) => (
  <Layout pageName='Blog'>
    <Stack spacer='s2'>
      {data.posts.edges.map(({ node }) => (
        <BlogPost
          key={node.fields.slug}
          link={node.fields.slug}
          title={node.frontmatter.title}
          date={format(
            new Date(node.frontmatter.date),
            'do MMM yyyy'
          )}
        />
      ))}
    </Stack>
  </Layout>
)

export const query = graphql`
  query blogQuery {
    posts: allMdx(
      filter: { fileAbsolutePath: { regex: "/content/posts/" } }
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
        }
      }
    }
  }
`

export default Blog
