// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/jamesmulholland/proj/jmulholland-dot-com/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-templates-blog-post-jsx": preferDefault(require("/Users/jamesmulholland/proj/jmulholland-dot-com/src/templates/BlogPost.jsx")),
  "component---src-templates-page-jsx": preferDefault(require("/Users/jamesmulholland/proj/jmulholland-dot-com/src/templates/Page.jsx")),
  "component---cache-dev-404-page-js": preferDefault(require("/Users/jamesmulholland/proj/jmulholland-dot-com/.cache/dev-404-page.js")),
  "component---src-pages-404-jsx": preferDefault(require("/Users/jamesmulholland/proj/jmulholland-dot-com/src/pages/404.jsx")),
  "component---src-pages-blog-jsx": preferDefault(require("/Users/jamesmulholland/proj/jmulholland-dot-com/src/pages/blog.jsx")),
  "component---src-pages-index-jsx": preferDefault(require("/Users/jamesmulholland/proj/jmulholland-dot-com/src/pages/index.jsx"))
}

exports.json = {
  "layout-index.json": require("/Users/jamesmulholland/proj/jmulholland-dot-com/.cache/json/layout-index.json"),
  "first.json": require("/Users/jamesmulholland/proj/jmulholland-dot-com/.cache/json/first.json"),
  "thoughts.json": require("/Users/jamesmulholland/proj/jmulholland-dot-com/.cache/json/thoughts.json"),
  "uses.json": require("/Users/jamesmulholland/proj/jmulholland-dot-com/.cache/json/uses.json"),
  "dev-404-page.json": require("/Users/jamesmulholland/proj/jmulholland-dot-com/.cache/json/dev-404-page.json"),
  "404.json": require("/Users/jamesmulholland/proj/jmulholland-dot-com/.cache/json/404.json"),
  "blog.json": require("/Users/jamesmulholland/proj/jmulholland-dot-com/.cache/json/blog.json"),
  "index.json": require("/Users/jamesmulholland/proj/jmulholland-dot-com/.cache/json/index.json"),
  "404-html.json": require("/Users/jamesmulholland/proj/jmulholland-dot-com/.cache/json/404-html.json")
}