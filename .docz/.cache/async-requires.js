// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("./dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---readme-md": () => import("./../../README.md" /* webpackChunkName: "component---readme-md" */),
  "component---src-field-mdx": () => import("./../../src/Field.mdx" /* webpackChunkName: "component---src-field-mdx" */),
  "component---src-form-mdx": () => import("./../../src/Form.mdx" /* webpackChunkName: "component---src-form-mdx" */),
  "component---src-fields-styleguide-mdx": () => import("./../../src/fields/styleguide.mdx" /* webpackChunkName: "component---src-fields-styleguide-mdx" */),
  "component---src-pages-404-js": () => import("./../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */)
}

