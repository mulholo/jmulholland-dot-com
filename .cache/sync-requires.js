// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/jamesmulholland/proj/jmulholland-dot-com/.cache/layouts/index.js"))
}

exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/jamesmulholland/proj/jmulholland-dot-com/.cache/dev-404-page.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/jamesmulholland/proj/jmulholland-dot-com/src/pages/index.js"))
}

exports.json = {
  "layout-index.json": require("/Users/jamesmulholland/proj/jmulholland-dot-com/.cache/json/layout-index.json"),
  "dev-404-page.json": require("/Users/jamesmulholland/proj/jmulholland-dot-com/.cache/json/dev-404-page.json"),
  "index.json": require("/Users/jamesmulholland/proj/jmulholland-dot-com/.cache/json/index.json")
}