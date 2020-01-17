const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'MarkdownRemark') {
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
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              type
            }
            html
          }
        }
      }
    }
  `)
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const { fields, frontmatter } = node
    const { slug } = fields
    const { type } = frontmatter
    createPage({
      path: slug,
      component: path.resolve(
        `./src/templates/${type === 'page' ? 'Page' : 'BlogPost'}.jsx`
      ),
      // context is the fields available to gql queries
      context: {
        slug,
        html: node.html,
        type,
      },
    })
  })
}
