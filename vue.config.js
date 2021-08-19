const path = require('path');

module.exports = {
  //基本路径
  publicPath: process.env.NODE_ENV === 'production' ? '' : '/',
  //输出文件目录
  outputDir: process.env.NODE_ENV === 'production' ? 'dist' : 'devdist',
  //eslint-loader开关
  lintOnSave: false,
  /**
   * webpack配置，see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
   */
  chainWebpack: (config) => { },
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'components': '@/components',
        'router': '@/router',
        'network': '@/network',
        'store': 'store',
        'views': '@/views',
      }
    }
  },
  //生产环境是否生成sourceMap文件
  productionSourceMap: false,
  //css相关配置
  css: {
    //是否使用css分离插件 ExtractTextPlugin
    extract: true,
    //css sourceMap开关
    sourceMap: false,
    //css预设器配置
    loaderOptions: {
      sass: {
        prependData: `@import "./src/styles/main.scss";`
      }
    },
    //启用css modulesfor all css / pre-processor files
    requireModuleExtension: false
  },
  //use thread-loader for babel & TS in production build
  //enable by default if the machine has more than 1 cores
  parallel: require('os').cpus().length > 1,
  /**
   * PWA相关插件配置
   */
  pwa: {},
  //webpack-dev-server 相关配置
  devServer: {
    open: false,
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hot: true,
    hotOnly: false,
    proxy: null,
    overlay: {
      warnings: true,
      errors: true
    },
    before: app => { }
  },
  //第三方插件配置
  pluginOptions: {}
}
