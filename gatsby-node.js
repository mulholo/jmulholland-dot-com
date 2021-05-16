/* eslint-disable no-useless-escape */
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query {
      posts: allMdx(
        filter: { fileAbsolutePath: { regex: "/content/posts/" } }
      ) {
        edges {
          node {
            fields {
              slug
            }
            body
          }
        }
      }
      pages: allMdx(
        filter: { fileAbsolutePath: { regex: "/content/pages/" } }
      ) {
        edges {
          node {
            fields {
              slug
            }
            body
          }
        }
      }
      notes: allMdx(
        filter: { fileAbsolutePath: { regex: "/content/notes/" } }
      ) {
        edges {
          node {
            fields {
              slug
            }
            body
          }
        }
      }
    }
  `)

  const { createPage } = actions
  function makePages(dataType, templateName) {
    data[dataType].edges.forEach(({ node }) => {
      const { fields, body } = node
      const { slug } = fields
      createPage({
        path: slug,
        component: path.resolve(
          `./src/templates/${templateName}.jsx`
        ),
        // context is the fields available to gql queries
        context: {
          slug,
          body,
        },
      })
    })
  }

  makePages('posts', 'BlogPost')
  makePages('pages', 'Page')
  makePages('notes', 'Note')
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'Mdx') {
    const slug = createFilePath({
      node,
      getNode,
    })
    // Create slug field which can be accessed on node.fields.slug above
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}
