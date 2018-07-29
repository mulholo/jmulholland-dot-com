// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-blog-post-js": require("gatsby-module-loader?name=component---src-templates-blog-post-js!/Users/jamesmulholland/proj/jmulholland-dot-com/src/templates/BlogPost.js"),
  "component---cache-dev-404-page-js": require("gatsby-module-loader?name=component---cache-dev-404-page-js!/Users/jamesmulholland/proj/jmulholland-dot-com/.cache/dev-404-page.js"),
  "component---src-pages-index-js": require("gatsby-module-loader?name=component---src-pages-index-js!/Users/jamesmulholland/proj/jmulholland-dot-com/src/pages/index.js")
}

exports.json = {
  "layout-index.json": require("gatsby-module-loader?name=path---!/Users/jamesmulholland/proj/jmulholland-dot-com/.cache/json/layout-index.json"),
  "this-is-a-test-blog-post.json": require("gatsby-module-loader?name=path---this-is-a-test-blog-post!/Users/jamesmulholland/proj/jmulholland-dot-com/.cache/json/this-is-a-test-blog-post.json"),
  "dev-404-page.json": require("gatsby-module-loader?name=path---dev-404-page!/Users/jamesmulholland/proj/jmulholland-dot-com/.cache/json/dev-404-page.json"),
  "index.json": require("gatsby-module-loader?name=path---index!/Users/jamesmulholland/proj/jmulholland-dot-com/.cache/json/index.json")
}

exports.layouts = {
  "layout---index": require("gatsby-module-loader?name=component---src-layouts-index-js!/Users/jamesmulholland/proj/jmulholland-dot-com/.cache/layouts/index.js")
}