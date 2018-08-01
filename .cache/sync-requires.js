// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/jamesmulholland/proj/jmulholland-dot-com/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-templates-blog-post-js": preferDefault(require("/Users/jamesmulholland/proj/jmulholland-dot-com/src/templates/BlogPost.js")),
  "component---cache-dev-404-page-js": preferDefault(require("/Users/jamesmulholland/proj/jmulholland-dot-com/.cache/dev-404-page.js")),
  "component---src-pages-blog-js": preferDefault(require("/Users/jamesmulholland/proj/jmulholland-dot-com/src/pages/blog.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/jamesmulholland/proj/jmulholland-dot-com/src/pages/index.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/jamesmulholland/proj/jmulholland-dot-com/src/pages/404.js"))
}

exports.json = {
  "layout-index.json": require("/Users/jamesmulholland/proj/jmulholland-dot-com/.cache/json/layout-index.json"),
  "this-is-a-test-blog-post.json": require("/Users/jamesmulholland/proj/jmulholland-dot-com/.cache/json/this-is-a-test-blog-post.json"),
  "dev-404-page.json": require("/Users/jamesmulholland/proj/jmulholland-dot-com/.cache/json/dev-404-page.json"),
  "blog.json": require("/Users/jamesmulholland/proj/jmulholland-dot-com/.cache/json/blog.json"),
  "index.json": require("/Users/jamesmulholland/proj/jmulholland-dot-com/.cache/json/index.json"),
  "404.json": require("/Users/jamesmulholland/proj/jmulholland-dot-com/.cache/json/404.json"),
  "404-html.json": require("/Users/jamesmulholland/proj/jmulholland-dot-com/.cache/json/404-html.json")
}