const { mergeWith } = require('lodash/fp')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Fresh',
    description: "They're dope, they're fresh.",
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: false,
        o: false,
        open: false,
        'open-browser': false,
        root: '/Users/scotttolinski/Sites/fresh-forms/.docz',
        base: '/',
        source: './',
        src: './',
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Fresh',
        description: "They're dope, they're fresh.",
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: '/Users/scotttolinski/Sites/fresh-forms',
          templates:
            '/Users/scotttolinski/Sites/fresh-forms/node_modules/docz-core/dist/templates',
          docz: '/Users/scotttolinski/Sites/fresh-forms/.docz',
          cache: '/Users/scotttolinski/Sites/fresh-forms/.docz/.cache',
          app: '/Users/scotttolinski/Sites/fresh-forms/.docz/app',
          appPackageJson: '/Users/scotttolinski/Sites/fresh-forms/package.json',
          gatsbyConfig:
            '/Users/scotttolinski/Sites/fresh-forms/gatsby-config.js',
          gatsbyBrowser:
            '/Users/scotttolinski/Sites/fresh-forms/gatsby-browser.js',
          gatsbyNode: '/Users/scotttolinski/Sites/fresh-forms/gatsby-node.js',
          gatsbySSR: '/Users/scotttolinski/Sites/fresh-forms/gatsby-ssr.js',
          importsJs:
            '/Users/scotttolinski/Sites/fresh-forms/.docz/app/imports.js',
          rootJs: '/Users/scotttolinski/Sites/fresh-forms/.docz/app/root.jsx',
          indexJs: '/Users/scotttolinski/Sites/fresh-forms/.docz/app/index.jsx',
          indexHtml:
            '/Users/scotttolinski/Sites/fresh-forms/.docz/app/index.html',
          db: '/Users/scotttolinski/Sites/fresh-forms/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
