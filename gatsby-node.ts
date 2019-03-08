import path = require('path')

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    const BlogPost = path.resolve('./src/templates/BlogPost.tsx')
    const Page = path.resolve('./src/templates/Page.tsx')
    resolve(
      graphql(`
        {
          allContentfulBlogPost {
            edges {
              node {
                slug
              }
            }
          }
          allContentfulPage {
            edges {
              node {
                slug
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors)
        }
        result.data.allContentfulBlogPost.edges.forEach(
          ({ node }) => {
            createPage({
              path: node.slug,
              component: BlogPost,
              context: {
                slug: node.slug,
              },
            })
          }
        )
        result.data.allContentfulPage.edges.forEach(({ node }) => {
          createPage({
            path: node.slug,
            component: Page,
            context: {
              slug: node.slug,
            },
          })
        })
      })
    )
  })
}
