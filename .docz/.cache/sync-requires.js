const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---example-readme-md": hot(preferDefault(require("/Users/scotttolinski/Sites/fresh-forms/example/README.md"))),
  "component---readme-md": hot(preferDefault(require("/Users/scotttolinski/Sites/fresh-forms/README.md"))),
  "component---src-field-mdx": hot(preferDefault(require("/Users/scotttolinski/Sites/fresh-forms/src/Field.mdx"))),
  "component---src-form-mdx": hot(preferDefault(require("/Users/scotttolinski/Sites/fresh-forms/src/Form.mdx"))),
  "component---src-fields-styleguide-mdx": hot(preferDefault(require("/Users/scotttolinski/Sites/fresh-forms/src/fields/styleguide.mdx"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/scotttolinski/Sites/fresh-forms/.docz/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/scotttolinski/Sites/fresh-forms/.docz/src/pages/404.js")))
}

