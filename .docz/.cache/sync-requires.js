const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/scotttolinski/Sites/fresh-forms/.docz/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/scotttolinski/Sites/fresh-forms/.docz/src/pages/404.js"))),
  "component---src-field-mdx": hot(preferDefault(require("/Users/scotttolinski/Sites/fresh-forms/src/Field.mdx"))),
  "component---src-fields-styleguide-mdx": hot(preferDefault(require("/Users/scotttolinski/Sites/fresh-forms/src/fields/styleguide.mdx"))),
  "component---src-form-mdx": hot(preferDefault(require("/Users/scotttolinski/Sites/fresh-forms/src/Form.mdx")))
}

