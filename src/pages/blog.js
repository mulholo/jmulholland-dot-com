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
    <div>{node.body.childMarkdownRemark.excerpt}></div>
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
            body {
              childMarkdownRemark {
                excerpt
              }
            }
          }
        }
    }
  }
`;

export default BlogPage;
