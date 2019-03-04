import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

const Page = ({ data, location }) => {
  if (!data) return null
  const { title, body } = data.contentfulPage
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
  )
}

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
}

export const query = graphql`
  query pageQuery($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
      title
      slug
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`

export default Page
