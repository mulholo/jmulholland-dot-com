const path = require('path');

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve('src/templates/BlogPost.jsx');
    const pageTemplate = path.resolve('src/templates/Page.jsx');
    resolve(
      graphql(`
        {
          allContentfulBlogPost(limit: 100) {
            edges {
              node {
                id
                slug
              }
            }
          }
          allContentfulPage {
            edges {
              node {
                id
                slug
              }
            }
          }
        }
      `).then((result) => {
        if (result.errors) {
          reject(result.errors);
        }
        result.data.allContentfulBlogPost.edges.forEach(({ node }) => {
          createPage({
            path: node.slug,
            component: blogPostTemplate,
            context: {
              slug: node.slug,
            },
          });
        });
        result.data.allContentfulPage.edges.forEach(({ node }) => {
          createPage({
            path: node.slug,
            component: pageTemplate,
            context: {
              slug: node.slug,
            },
          });
        });
      }),
    );
  });
};
