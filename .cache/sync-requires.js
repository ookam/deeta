const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/var/www/deeta/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/var/www/deeta/src/pages/index.js"))),
  "component---src-pages-list-js": hot(preferDefault(require("/var/www/deeta/src/pages/list.js"))),
  "component---src-pages-profile-js": hot(preferDefault(require("/var/www/deeta/src/pages/profile.js")))
}

