const pkgConfig = require('./package.json')

const config = {
  pluginOptions: {
    stylelint: {
      fix: true,
      files: '',
      formatter: () => {},
    },
    lintStyleOnBuild: false,
  },
  configureWebpack: {
    name: pkgConfig.name,
    plugins: [],
  },
}

module.exports = config
