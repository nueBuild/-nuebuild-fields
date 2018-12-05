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
    resolve: {
      alias: {
        vue$: 'vue/dist/vue.common',
      },
    },
  },
}

module.exports = config
