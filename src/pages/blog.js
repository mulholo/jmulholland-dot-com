import React from 'react';
import Link from 'gatsby-link';

const BlogPage = ({data}) => (
  <ul>
    {data.allContentfulBlogPost.edges.map((edge) => <BlogPost node={edge.node} />)}
  </ul>
);

const BlogPost = ({node}) =>
  <li>
    <Link to={node.slug}>{node.title}</Link>
  </li>

export const pageQuery = graphql`
  query pageQuery {
    allContentfulBlogPost(filter: {
      node_locale: {eq: "en-GB"}
    }) {
        edges {
          node {
            title
            slug
          }
        }
    }
  }
`;

export default BlogPage