import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

const BlogPage = ({ data }) => (
  <ul>
    {data.allContentfulBlogPost.edges.map(({ node }) => <BlogPost node={node} />)}
  </ul>
);

BlogPage.propTypes = {
  data: PropTypes.shape({
    edge: PropTypes.shape({
      node: PropTypes.shape({
        title: PropTypes.string,
        slug: PropTypes.string,
        body: PropTypes.shape({
          childMarkDownRemark: PropTypes.shape({
            excerpt: PropTypes.string,
          }),
        }),
      }),
    }),
  }).isRequired,
};

const BlogPost = ({ node }) => (
  <li>
    <Link
      to={node.slug}
    >
      {node.title}
    </Link>
    <div>
      {node.body.childMarkdownRemark.excerpt}
    </div>
  </li>
);

BlogPost.propTypes = {
  node: PropTypes.shape({
    slug: PropTypes.string,
    body: PropTypes.shape({
      childMarkdownRemark: PropTypes.shape({
        excerpt: PropTypes.string,
      }),
    }),
  }).isRequired,
};

export const query = graphql`
  query blogQuery {
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

