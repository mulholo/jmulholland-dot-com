import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class BlogPost extends Component {
  render() {
    const {
      title,
      body,
    } = this.props.data.contentfulBlogPost;
    console.log(this.props.data.contentfulBlogPost);
    return (
      <div>
        <h1>{title}</h1>
      </div>
    )
  }
}

BlogPost.propTypes = {
  data: PropTypes.object.isRequired,
}

export const pageQuery = graphql`
  query blogPostQuery($slug: String!){
    contentfulBlogPost(slug: {eq: $slug}) {
      title
      slug
    }
  }
`
