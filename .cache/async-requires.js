// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-404-js": () => import("./../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-index-js": () => import("./../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-list-js": () => import("./../src/pages/list.js" /* webpackChunkName: "component---src-pages-list-js" */),
  "component---src-pages-profile-js": () => import("./../src/pages/profile.js" /* webpackChunkName: "component---src-pages-profile-js" */)
}

