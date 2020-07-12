const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'Mdx') {
    const slug = createFilePath({ node, getNode, basePath: `posts` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const { data } = await graphql(`
    query {
      posts: allMdx(
        filter: { frontmatter: { type: { eq: "post" } } }
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
        filter: { frontmatter: { type: { eq: "page" } } }
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
}
