import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

const BlogPost = ({ data, location }) => {
  if (!data) return null;
  const { title, body } = data.contentfulBlogPost;
  return (
    <Layout pathname={location.pathname}>
      <h1>{title}</h1>
      <div
        // eslint-disable-next-line
        dangerouslySetInnerHTML={{
          __html: body.childMarkdownRemark.html,
        }}
      />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    contentfulBlogPost: PropTypes.shape({
      title: PropTypes.string,
      body: PropTypes.shape({
        childMarkdownRemark: PropTypes.shape({
          html: PropTypes.string,
          excerpt: PropTypes.string,
        }),
      }),
    }),
  }).isRequired,
};

export const query = graphql`
  query blogPostQuery($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      slug
      body {
        childMarkdownRemark {
          html
          excerpt
        }
      }
    }
  }
`;

export default BlogPost;
