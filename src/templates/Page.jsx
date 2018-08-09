import React from 'react';
import PropTypes from 'prop-types';

const Page = ({ data }) => {
  const { contentfulPage } = data;
  const { title, body } = contenfulPage;
  return (
    <div>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: body.childMarkdownRemark.html }} />
    </div>
  );
};

Page.propTypes = {
  data: PropTypes.shape({
    contentfulPage: PropTypes.shape({
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
  query pageQuery($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
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

export default Page;
