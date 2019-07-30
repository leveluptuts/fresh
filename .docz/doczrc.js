export default {
  menu: ['Home', { name: 'Components', menu: ['Components'] }],
  modifyBabelRc: (config) => {
    config.babelrc = false
    return config
  }
}
